function checkOverlap(radius: number, xCenter: number, yCenter: number, x1: number, y1: number, x2: number, y2: number): boolean {

    const isWithinCircle = (x: number, y: number) => {
        // check ecludian distance from circle is less than radius
        let distance = Math.sqrt((x - xCenter) ** 2 + (y - yCenter) ** 2)
        return distance <= radius
    }

    for (let i = y1; i <= y2; i++) {
        for (let j = x1; j <= x2; j++) {
            if (isWithinCircle(j, i)) {
                console.log(j, i)
                return true
            }
        }
    }

    return false
};

