import random
# 1
# name = input('What is your name? ')
# print("Hello," + name + "!")

# 2
# name = input('What is your name? ')
# name = name.upper()
# print("HELLO " + name + " !")
# print("YOUR NAME HAS " + str(len(name)) + " LETTERS IN IT! AWESOME!")

# Stars
# num = int(input("How many stars?"))
# columns = num
# rows = num
# stars = ""
# while columns > 0:
#     stars = stars + "*"
#     columns -=1
# while rows > 0:
#     print(stars)
#     rows -=1

# Tip Calculator
# print total plus tip
# def tipCalc():
#     bill = float(input("How much was your bill?"))
#     service = input("How was your service (good, fair, or bad)?")
#     if service == "good":
#          tip = round(bill * 0.2 , 2)
#     if service == "fair":
#         tip = round(bill * 0.15 , 2)
#     if service == "bad":
#         tip = round(bill * 0.1 , 2)
#     print(f"Tip: ${tip}")
#     print(f"Total: ${bill+tip}")
# tipCalc()

# Random Number Game
def randomNumbers():
    num = random.randint(1, 10);
    while True:
        guess = int(input("Guess the number between 1 and 10: "))
        if guess > num:
            print(f"{guess} is too high")
        elif guess < num:
            print(f"{guess} is too low")
        else:
            print("yessssss you did it")
            break
randomNumbers()
