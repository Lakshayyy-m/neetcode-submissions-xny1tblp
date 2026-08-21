class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums = sorted(nums)
        result = []

        j = 0

        while j < len(nums) - 2:
            k = j + 1
            l = len(nums) - 1

            while k < l:
                total = nums[j] + nums[k] + nums[l]

                if total == 0:
                    result.append([nums[j], nums[k], nums[l]])

                    k += 1
                    l -= 1

                    while k < l and nums[k] == nums[k - 1]:
                        k += 1

                    while k < l and nums[l] == nums[l + 1]:
                        l -= 1

                elif total < 0:
                    k += 1

                else:
                    l -= 1

            j += 1
            while j < len(nums) - 2 and nums[j] == nums[j - 1]:
                j += 1

        return result
