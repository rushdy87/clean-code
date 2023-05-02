**The Difference Between Objects & Data Structures**

# **Object** Private internals / properties, public API (methods).

# **Data Container / Data Structure** Public internals / properties, (almost) no API (methods).

# **Object** Contain your business logic (in OOP).

# **Data Container / Data Structure** Store and transport data.

# **Object** Abstractions over concretions.

# **Data Container / Data Structure** Concretions only.

#

**Polymorphism**

# The ability of an object to take on many forms.

#

**Classes Should Be Small**

# Classes should have a single responsibility - Single-Responsibility Principle (SRP).

# A Product class is responsible for product “issues” (e.g. change the product name).

#

**Cohesion**

# How much are your class methods using the class properties?

**Law Of Demeter**

**Code in a method may only access direct internals (properties and methods) of:**

# • the object it belongs to

# • objects that are stored in properties of that object

# • objects which are received as method parameters

# • objects which are created in the method

**The SOLID Principles**

# **S - Single Responsibility Principle.** (Classes should have a single responsibility – a class shouldn’t change for more than one reason.)

# **O - Open-Closed Principle.** (A class should be open for extension but closed for modification.)

# **L - Liskov Substitution Principle.** (Objects should be replaceable with instances of their subclasses without altering the behavior.)

# **I - Interface Segregation Principle.** (Many client-specific interfaces are better than one general purpose interface.)

# **D - Dependency Inversion Principle.** (You should depend upon abstractions, not concretions.)
