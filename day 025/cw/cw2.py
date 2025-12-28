#CODEWARS
# 2)https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
# 3)https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b



#2)
def is_palindrome(s):
    s = s.lower()
    return s == s[::-1]

# @test.describe('sample tests')
# def sample_tests():
#     test.assert_equals(is_palindrome('a'), True)
#     test.assert_equals(is_palindrome('aba'), True)
#     test.assert_equals(is_palindrome('Abba'), True)
#     test.assert_equals(is_palindrome('malam'), True)
#     test.assert_equals(is_palindrome('walter'), False)
#     test.assert_equals(is_palindrome('kodok'), True)
#     test.assert_equals(is_palindrome('Kasue'), False)

#Result:
# Time: 479ms Passed: 7Failed: 0
# Test Results:
# sample tests
# Test Passed
# Test Passed
# Test Passed
# Test Passed
# Test Passed
# Test Passed
# Test Passed
# Completed in 0.05ms
# You have passed all of the tests! :)



#3)
def make_upper_case(s):
    s_upper = s.upper()
    return s_upper

# import codewars_test as test
# from solution import make_upper_case

# @test.describe("Fixed Tests")
# def fixed_tests():
#     @test.it('Basic Test Cases')
#     def basic_test_cases():
#         test.assert_equals(make_upper_case("hello"), "HELLO")

#Result:
# Time: 462ms Passed: 1Failed: 0
# Test Results:
# Fixed Tests
# Basic Test Cases
# Completed in 0.04ms
# You have passed all of the tests! :)


