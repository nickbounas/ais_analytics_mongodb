db.createUser(
    {
        user: "zenodo",
        pwd: "zenodo",
        roles: [
            {
                role: "readWrite",
                db: "zenodo"
            }
        ]
    }
);


db.createCollection("positions")
db.createCollection("vessels")