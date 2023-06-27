let result = document.getElementById('result');
let booleanNumber = true;//数字入力
let booleanSymbol = false;//四則演算入力
let booleanComma = false;//コンマ入力
let oneComma = true;//１つの数字にカンマが２つ以上つかない
let firstZero = true;//0の可否


function addText(str,flag) {//入力できる


    if(str == "00" && firstZero){//最初の"００"は無効
        
        ;//処理しません
    
    }else if(str == "0" && firstZero){//最初が"０"
        
        result.value += str;
        booleanNumber = false;
        booleanComma = true;
        firstZero = false;
        
    }else if(flag == "num" && booleanNumber){//数字入力
    
        result.value += str;
        booleanNumber = true;
        booleanSymbol = true;
        booleanComma = true;
        firstZero = false;
        
    }
    
    if(flag == "symbol" && booleanSymbol){//四則演算入力
        
        result.value += str;
        booleanNumber = true;
        booleanSymbol = false;
        booleanComma = false;
        oneComma = true;
        firstZero = true;
        
    }
    
    if(flag == "comma" && booleanComma && oneComma){//カンマ入力
    
        result.value += str;
        booleanNumber = true;
        booleanSymbol = false;
        booleanComma = false;
        oneComma = false;
        firstZero = false;
        
    }

}


function reset() {//ACボタン

    result.value = null;
    booleanNumber = true;
    booleanSymbol = false;
    booleanComma = false;
    oneComma = true;
    firstZero = true;
    
}


function equal() {//=ボタン
    
    result.value = eval(result.value);//文字を式で読む
    
}