export const computeFibonacciNumber = (position: number | null, isRecursive: boolean = false): number => {
    let notNullPosition = position;
    if (notNullPosition === null) {
        notNullPosition = 1;
    }

    if (isRecursive) return recursiveFibonacci(notNullPosition);

    let i = 1;
    let j = 1;

    if (notNullPosition <= 2) {
        return 1;
    }

    let currentPosition = 2;
    while (currentPosition < notNullPosition) {
        const temp = i;
        i = j;
        j += temp;
        currentPosition++;
    }
    return j;
};

const recursiveFibonacci = (initialPosition: number, left: number = 0, right: number = 1, position?: number): number => {
    const currentPosition = position ?? initialPosition;
    if (initialPosition === 0) return 0;
    if (currentPosition === 0) return left;
    if (initialPosition > 0) {
        return recursiveFibonacci(initialPosition, right, left + right, currentPosition - 1);
    } else {
        return recursiveFibonacci(initialPosition, right - left, left, currentPosition + 1);
    }
}

export const computeFibonacciArray = (start: number, endInclusive: number): number[] => {
    const inputArray = [...Array(endInclusive - start + 1).keys()].map(i => i + start);
    return inputArray.map(x => computeFibonacciNumber(x));
}
