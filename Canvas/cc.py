import sys, os

def is_intstring(s):
    try:
        int(s)
        return True
    except ValueError:
        return False

def is_hex(s):
    try:
        int(s, 16)
        return True
    except ValueError:
        return False

for arg in sys.argv[1:3]:
    if not is_intstring(arg):
        sys.exit("First two arguments must be integers. Exit.")

if not is_hex(sys.argv[3]):
    sys.exit("Third argument should be a Hex. Exit")



i = int(sys.argv[1])
j = int(sys.argv[2])
i = i-1
j = j-1


if i >= 0 and i <= 15:
    if j >= 0 and j <= 15:
        if len(sys.argv[3]) == 6:
            ColorList = open("colors.txt").readlines()
            ColorListU = open("temp.txt", "w")

            ColorList[i*16 + j] = "FF" + sys.argv[3] + "\n"

            for color in ColorList[0:]:
                ColorListU.write("%s" % color)
            

            ColorListU.close()
            os.remove('colors.txt')
            os.rename('temp.txt', 'colors.txt')
            print 'Number of colors', len(ColorList)