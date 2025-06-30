let skills = new Map();

skills.set("shihab", "C/C++");
skills.set("Saimon", "Python");
skills.set("Talha", "C");

let log = console.log;

log(skills.keys());
log(skills.has("shihab"));
log(skills.get("shihab"));
log(skills.get("sm"));

for (let [key, value] of skills) {
    log(key, value);
}

skills.set("shihab", "C/C++, Python");
log(skills);

log("Something");
skills.forEach((value, key, map) => {
    log(value, key, map);
});