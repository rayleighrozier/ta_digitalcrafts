class User:
    def __init__(self, firstName, lastName, addresses = []):
        self.firstName = firstName
        self.lastName = lastName
        self.addresses = addresses
    def __str__(self):
        return f"""
        {self.firstName}
        {self.lastName}
        {self.addresses}
        """
    def newAddress(self, address):
        self.addresses.append(address)

class Address:
    def __init__ (self, street, city, state, zip):
        self.street = street
        self.city = city
        self.state = state
        self.zip = zip
    def __str__(self):
        return f"""
        {self.street}
        {self.city}
        {self.state}
        {self.zip}
        """


rayleigh = User("rayleigh", "rozier")
rayleigh.newAddress(Address("123 Sesame Street", "Atlanta", "GA", "12345"))
rayleigh.newAddress(Address("456 Sesame Street", "Atlanta", "GA", "12345"))

print(rayleigh.addresses)
