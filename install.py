import sys, time, os


def m(s):
    for c in s + '\n':
        sys.stdout.write(c)
        sys.stdout.flush()
        time.sleep(0.1)

os.system("clear")
print("""
      ██████╗░░█████╗░██████╗░██╗░░██╗
      ██╔══██╗██╔══██╗██╔══██╗██║░██╔╝
      ██║░░██║███████║██████╔╝█████═╝░
      ██║░░██║██╔══██║██╔══██╗██╔═██╗░
      ██████╔╝██║░░██║██║░░██║██║░╚██╗
      ╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝

      ██████╗░░█████╗░████████╗
      ██╔══██╗██╔══██╗╚══██╔══╝
      ██████╦╝██║░░██║░░░██║░░░
      ██╔══██╗██║░░██║░░░██║░░░
      ██████╦╝╚█████╔╝░░░██║░░░
      ╚═════╝░░╚════╝░░░░╚═╝░░░
      ░ ░\x1b[00m\033[041m TERMUX TELEGRAM BOT THE DEVELOPER03  \033[00m\x1b[1;00m░░
        ░ ░   ░   ░    ░ ░   ░    ░   ░   ░\x1b[00m
""")
m('\x1b[00m\033[041m Install materials automatically  \033[00m')
m('\x1b[00m\033[041m Dont Exit Termux Before Finishing Installing!!  \033[00m')
os.system("pkg update -y")
os.system("pkg upgrade -y")
os.system("pkg install nano")
os.system("pkg install python -y")
os.system("pkg install python2 -y")
os.system("pkg install nodejs -y")
os.system("pkg install libwebp -y")
os.system("pkg install ffmpeg -y")
os.system("npm install")
os.system("npm audit fix")
os.system("npm install axios")
os.system("npm install telegraf")
m('\x1b[00m\033[041m Starting Telegram Bot...  \033[00m')
os.system("clear")
os.system("python start.py")
m("DONE")
