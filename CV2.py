import numpy as np
import cv2

cap = cv2.VideoCapture(0)
fgbg = cv2.createBackgroundSubtractorMOG2()

def overlapMask(cap, fgmask, width, height):
    for x in range(0, width):
        for y in range(0, height):
            if fgmask[x][y] == 0:
                cap[x][y] = 0
    return cap

while(1):
    lower = np.array([0, 48, 80], dtype = "uint8")
    upper = np.array([20, 255, 255], dtype = "uint8")
    ret, frame = cap.read()
    original = frame
    cv2.imshow("first", frame)
    fgmask = fgbg.apply(frame)
    k = cv2.waitKey(30) & 0xff
    width = 480;
    height = 640;
    postBackSubt = overlapMask(frame, fgmask, width, height)
    cv2.imshow("second", postBackSubt)
    lower = [50, 50,50]
    upper = [255, 200, 200]
    lower = np.array(lower, dtype = "uint8")
    upper = np.array(upper, dtype = "uint8")
    mask = cv2.inRange(postBackSubt, lower, upper)
    output = cv2.bitwise_and(postBackSubt, postBackSubt, mask = mask)
    cv2.imshow("third", output)
    gray = cv2.cvtColor(output, cv2.COLOR_BGR2GRAY)
    ret, thresh = cv2.threshold(gray, 65, 255,cv2.THRESH_BINARY)
    contours, hierarchy = cv2.findContours(thresh,cv2.RETR_TREE,cv2.CHAIN_APPROX_SIMPLE)
    area = 0
    largestCnt = 0
    for cnt in contours:
        current = cv2.contourArea(cnt)
        if current > area:
            area = current
            largestCnt = cnt
    print(area)
    x,y,w,h = cv2.boundingRect(largestCnt)
    centerX = x + w /2
    centerY = y + h / 2

    cv2.rectangle(output,(x,y),(x+w,y+h),(0,255,0),4)
    cv2.imshow("images", output)

    if k == 27:
        break

cap.release()
cv2.destroyAllWindows()
