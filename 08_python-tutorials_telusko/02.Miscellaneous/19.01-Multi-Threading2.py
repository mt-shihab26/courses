from threading import Thread
from time import sleep


class Hello(Thread):
    def run(self):
        for i in range(20):
            print("Hello", i)
            sleep(1)


class Hi(Thread):
    def run(self):
        for i in range(20):
            print("Hi", i)
            sleep(1)


t1 = Hello()
t2 = Hi()

t1.start()
sleep(0.2)
t2.start()

print("Bye")
