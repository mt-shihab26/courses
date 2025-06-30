#include <bits/stdc++.h>
using namespace std;
#define int long long

struct asst
{
    int t, z, y;
};

int count_max_balloons(int t, int z, int y, int Time)
{
    int batch_time = (z * t) + y;
    int batch_count = (Time / batch_time);
    int rem_time = Time % batch_time;
    int total_balloons = 0;
    total_balloons += (batch_count * z);
    if (rem_time != 0)
    {
        if (rem_time / t >= z)
            total_balloons += z;
        else
            total_balloons += (rem_time / t);
    }
    return total_balloons;
}

bool is_balloon_possible(int t, int z, int y, int balloons, int Time)
{
    int batch_time = (z * t) + y;
    int batches = balloons / z;
    bool ok = (balloons % z == 0) ? 1 : 0;
    int curr_time = 0;
    if (ok)
    {
        batches -= 1;
        curr_time = (batch_time * batches) + (z * t);
    }
    else
        curr_time = (batch_time * (batches)) + ((balloons % z) * t);
    return (curr_time <= Time);
}

bool is_possible(asst *assistant, int n, int m, int Time)
{
    int total_balloons = 0;
    for (int i = 0; i < n; i++)
    {
        int lo = 0, hi = (int)1e9;
        while (hi > lo + 1)
        {
            int balloons = (lo + hi) >> 1;
            if (is_balloon_possible(assistant[i].t, assistant[i].z, assistant[i].y, balloons, Time))
                lo = balloons;
            else
                hi = balloons;
        }
        total_balloons += lo;
    }
    return total_balloons >= m;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(0);

    int m, n;
    cin >> m >> n;
    asst assistant[n];
    for (int i = 0; i < n; i++)
        cin >> assistant[i].t >> assistant[i].z >> assistant[i].y;

    int min_time = -1, max_time = (int)1e9;
    while (max_time > min_time + 1)
    {
        int time = (min_time + max_time) >> 1;
        if (is_possible(assistant, n, m, time))
            max_time = time;
        else
            min_time = time;
    }
    cout << max_time << endl;

    int count[n];
    memset(count, 0, sizeof count);
    for (int i = 0; i < n; i++)
        count[i] = count_max_balloons(assistant[i].t, assistant[i].z, assistant[i].y, max_time);

    int total_balloons = 0;
    for (int i = 0; i < n; i++)
    {
        if (total_balloons + count[i] <= m)
        {
            cout << count[i] << " ";
            total_balloons += count[i];
        }
        else
        {
            if (total_balloons == m)
                cout << 0 << " ";
            else
            {
                cout << (m - total_balloons) << " ";
                total_balloons = m;
            }
        }
    }
    cout << "\n";

    return 0;
}