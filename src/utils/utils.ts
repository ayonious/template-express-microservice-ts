const _sum = (sum: number, it: number): number => {
  if (it === 0) {
    return sum;
  }
  return _sum(sum + it, it - 1);
};

const sum = (val: number) => _sum(0, val);

export default sum;
