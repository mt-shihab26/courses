type TNode<T> = {
    value: T;
    next?: TNode<T>;
};

class Queue<T> {
    private _length: number;
    private _head?: TNode<T>;
    private _tails?: TNode<T>;

    public length() {
        return this._length;
    }

    public constructor() {
        this._length = 0;
        this._head = undefined;
        this._tails = undefined;
    }

    public peek(): T | undefined {
        return this._head?.value;
    }

    public push(value: T) {
        this._length++;
        const node: TNode<T> = { value, next: undefined };
        if (!this._tails) {
            this._head = node;
            this._tails = node;
        } else {
            this._tails.next = node;
            this._tails = node;
        }
    }
    // O(1)

    public pop(): T | undefined {
        if (!this._head) {
            return undefined;
        }
        const tmp = this._head;
        this._head = this._head?.next;
        this._length--;

        // free up memory
        tmp.next = undefined;

        if (this._length === 0) {
            this._tails = undefined;
        }

        return tmp?.value;
    }
    // O(1)
}

test("queue", function () {
    const q = new Queue<number>();

    q.push(5);
    q.push(7);
    q.push(9);

    expect(q.pop()).toEqual(5);
    expect(q.length()).toEqual(2);

    // this must be wrong..?
    debugger;

    // i hate using debuggers
    q.push(11);
    debugger;
    expect(q.pop()).toEqual(7);
    expect(q.pop()).toEqual(9);
    expect(q.peek()).toEqual(11);
    expect(q.pop()).toEqual(11);
    expect(q.pop()).toEqual(undefined);
    expect(q.length()).toEqual(0);

    // just wanted to make sure that I could not blow up myself when i remove
    // everything
    q.push(69);
    expect(q.peek()).toEqual(69);
    expect(q.length()).toEqual(1);
});
