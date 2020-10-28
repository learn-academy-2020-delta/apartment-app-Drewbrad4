mockApts = [
    {
        id: 1,
        street: "221B Baker St.",
        city: "London",
        state: "UK",
        manager: "Ms. Hudson",
        email: "ms-hud@uk.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "no",
        user_id: 1
    },
    {
        id: 2,
        street: "742 Evergreen Terrace",
        city: "Springfield",
        state: "US",
        manager: "Homer",
        email: "hs@dounut.com",
        price: "500",
        bedrooms: 3,
        bathrooms: 2,
        pets: "yes",
        user_id: 2
    },
    {
        id: 3,
        street: "1640 Riverside Drive",
        city: "Hill Valley",
        state: "California",
        manager: "Emmet Brown",
        email: "julesfan@2015.com",
        price: "2000",
        bedrooms: 6,
        bathrooms: 4,
        pets: "yes",
        user_id: 1
    }
]

mockApts.each do |attributes|
    Apartment.create attributes
end