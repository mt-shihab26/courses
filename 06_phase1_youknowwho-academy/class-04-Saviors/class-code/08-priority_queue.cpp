#include <bits/stdc++.h>
using namespace std;

struct cmp
{
    bool operator()(int a, int b)
    {
        return a > b;
    }
};

int main()
{
    priority_queue<int> pq;
    pq.push(23);
    pq.push(82);
    pq.push(52);
    cout << pq.top() << "\n";

    pq.pop();
    cout << pq.top() << "\n";

    pq.push(10);
    pq.push(11);

    pq.pop();
    cout << pq.top() << "\n";

    pq.pop();
    cout << pq.top() << "\n";

    priority_queue<int, vector<int>, cmp> min_pq;
    min_pq.push(23);
    min_pq.push(82);
    min_pq.push(52);
    cout << min_pq.top() << "\n";
}