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
    ret, frame = cap.read()
    fgmask = fgbg.apply(frame)
    k = cv2.waitKey(30) & 0xff
    width = 480;
    height = 640;
    cv2.imshow('output',overlapMask(frame,fgmask, width, height))
    if k == 27:
        break

cap.release()
cv2.destroyAllWindows()