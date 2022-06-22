def tandemBicycle(red, blue, fastest):  
  answer = 0
  if fastest:
      all = red + blue
      all.sort(reverse=True)
      highestSpeeds = all[0:len(red)]
      for speed in highestSpeeds:
          answer = answer + speed
  else:
      red.sort()
      blue.sort()
      counter = len(red) -1
      while counter >= 0:
          speed = max(red[counter], blue[counter])
          answer = answer + speed
          counter -=1
  return answer

print(tandemBicycle([5,5,3,9,2], [3,6,7,2,1], True))
print(tandemBicycle([5,5,3,9,2], [3,6,7,2,1], False))


