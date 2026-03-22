# 0) https://www.codewars.com/kata/5966eeb31b229e44eb00007a/train/python
# 1) https://www.codewars.com/kata/514b92a657cdc65150000006/train/python


# 0)
vaporcode = lambda s: "  ".join(s.replace(" ", "").upper())

# 1)
solution = lambda number:sum(i for i in range(number) if i % 3 == 0 or i % 5 == 0) if number > 0 else 0


