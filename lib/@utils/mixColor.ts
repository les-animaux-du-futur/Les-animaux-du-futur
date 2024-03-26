// blend two hex colors together by an amount
export function mixColor(colorA:string, colorB:string, colorC:string, amount:any) {
    //mix A + B

    if(colorA && colorB){

        const [rA, gA, bA] = colorA.match(/\w\w/g).map((c) => parseInt(c, 16)) as number[]
        const [rB, gB, bB] = colorB.match(/\w\w/g).map((c) => parseInt(c, 16)) as number[]
        const r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
        const g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
        const b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
        const pre_result = '#' + r + g + b;

        if(colorC){

            //mix AB + C
            const [rA2, gA2, bA2] = pre_result.match(/\w\w/g).map((c) => parseInt(c, 16)) as number[]
            const [rB2, gB2, bB2] = colorC.match(/\w\w/g).map((c) => parseInt(c, 16)) as number[]
            const r2 = Math.round(rA2 + (rB2 - rA2) * amount).toString(16).padStart(2, '0');
            const g2 = Math.round(gA2 + (gB2 - gA2) * amount).toString(16).padStart(2, '0');
            const b2 = Math.round(bA2 + (bB2 - bA2) * amount).toString(16).padStart(2, '0');

            return '#' + r2 + g2 + b2;

        }else{
            return pre_result;
        }
    }else if(colorA && !colorB && !colorC){
        return colorA;
    }else {
        return '#000000'
    }
  }