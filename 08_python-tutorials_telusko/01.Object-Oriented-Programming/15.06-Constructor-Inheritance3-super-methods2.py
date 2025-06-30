class A:
    def __init__(self):
        print("At A init")

    def feature1(self):
        print("Feature 1 working")

    def feature2(self):
        print("Feature 2 working")


class B:
    def __init__(self):
        print("At B init")

    def feature3(self):
        print("Feature 3 working")

    def feature4(self):
        print("Feature 4 working")


class C(A, B):
    def __init__(self):
        super().__init__()
        print("At C init")

    def feature5(self):
        print("Feature 5 working")

    def feature6(self):
        print("Feature 6 working")
        super().feature1()


c1 = C()
