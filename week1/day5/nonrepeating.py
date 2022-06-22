def firstNonRepeating(string):
  hash = {};
  for letter in string:
    if letter not in hash:
        hash[letter] = 0;
    hash[letter]+= 1;
  
  for  letter in string:
    if hash[letter] == 1:
         return f"{letter},{string.index(letter)}";
  return -1;

# returns a, 0
print(firstNonRepeating("abcdef"));
# // returns b, 1
print(firstNonRepeating("abcdeaf"));
# // returns c, 3
print(firstNonRepeating("bbbc"));


# def repeating(string):
#     counter = {}
    
#     for char in string:
#         counter[char] = counter.get(char,0) + 1
#     for char in counter:
#         if counter[char] == 1: 
#             index = list(string).index(char)
#             print(index)
#             return print (char + ' is the first nonrepeating character')
#     return print('-1')

#     # returns a, 0
# repeating("abcdef");
# # // returns b, 1
# repeating("abcdeaf");
# # // returns c, 3
# repeating("bbbc");
