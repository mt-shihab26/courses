type TSNode<T> = {
    value: T;
    prev?: TSNode<T>;
};

class Stack<T> {
    private _length: number;
    private _head?: TSNode<T>;

    public length() {
        return this._length;
    }

    public constructor() {
        this._length = 0;
        this._head = undefined;
    }

    public peek(): T | undefined {
        return this._head?.value;
    }

    public push(value: T) {
        this._length++;
        const node: TSNode<T> = { value, prev: undefined };
        if (!this._head) {
            this._head = node;
            return;
        } else {
            node.prev = this._head;
            this._head = node;
        }
    }
    // O(1)

    public pop(): T | undefined {
        if (!this._head) {
            return undefined;
        }
        const tmp = this._head;
        this._head = this._head?.prev;
        this._length--;
        tmp.prev = undefined;

        return tmp?.value;
    }
    // O(1)
}

test("stack", function () {
    const s = new Stack<number>();

    s.push(5);
    s.push(7);
    s.push(9);

    expect(s.pop()).toEqual(9);
    expect(s.length()).toEqual(2);

    s.push(11);
    expect(s.pop()).toEqual(11);
    expect(s.pop()).toEqual(7);
    expect(s.peek()).toEqual(5);
    expect(s.pop()).toEqual(5);
    expect(s.pop()).toEqual(undefined);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    s.push(69);
    expect(s.peek()).toEqual(69);
    expect(s.length()).toEqual(1);

    //yayaya
});
