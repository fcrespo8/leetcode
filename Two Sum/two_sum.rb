# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}

nums = [2,7,11,15]
target = 9

def two_sum(nums, target)
  nums.each_with_index do |pri, ind1|
    nums.each_with_index do |seg, ind2|
      if (((pri + seg) == target) && (ind1 != ind2))
        return (arr = [ind1, ind2])
      end
    end
  end
end

puts two_sum(nums, target)
