class ToDoList:
    def __init__(self, todos =[]):
        self.todos = todos
    def __str__(self):
        return f"""
        todos:{self.todos}
        """
    def printTodos(self):
        print("-----")
        if len(self.todos) >0:
            for todo in self.todos:
                print(f"""
{self.todos.index(todo) + 1}. {todo}
            """
                )
        else:
            print(f"""
No todos yet!
""")
        print("-----")
    def addTodo(self, newTodo):
        self.todos.append(newTodo)
    def deleteTodo (self, index):
        index = int(index) -1
        self.todos.pop(index)

list = ToDoList()
print(f"""
 ~~ TO DO LIST ~~""")
while True:
    choice = input(f"""
What would you like to do?
1. Look at my list
2. Add an item
3. Delete an item
4. Quit
----- 
""")
    while choice != "1" and choice != "2" and choice != "3" and choice != "4":
        print("Please pick 1-4.")
        choice = input("What would you like to do?")
    if choice == "1":
        list.printTodos()
    if choice == "2":
        newTodo = input("What would you like to add? ")
        list.addTodo(newTodo)
    if choice == "3": 
        list.printTodos()
        index = input("Which item would you like to delete? ")
        list.deleteTodo(index)
    if choice == "4":
        print("Bye!")
        break