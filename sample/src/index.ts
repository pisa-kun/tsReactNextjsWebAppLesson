{
    // objectに対して型定義されていない状態
    const object = {
        aaa: 'AAA',
        bbb: 'BBB',
        ccc: 'CCC,'
    };

    console.log(object['aaa']);
    /// 型 'string' の式を使用して型 '{ aaa: string; bbb: string; ccc: string; }' にインデックスを付けることはできないため、要素は暗黙的に 'any' 型になります。
    ///型 'string' のパラメーターを持つインデックス シグネチャが型 '{ aaa: string; bbb: string; ccc
    // const key: string = receivedStringValue();
    // const value = object[key];

    // function receivedStringValue(){
    //     return 'aaa';
    // }
}

{
    interface StringKeyObject {
        // keyがstringで返り値がany
        [key :string]:any;
    }

    const sampleObject: StringKeyObject = {
        aaa: 'AAA',
        bbb: 'BBB',
        ccc: 'CCC,'
    };

    const receivedStringValue = () => {
        return 'ddd';
    };
    
    // コンパイルエラーはなくなるが、string型なのでundefinedになる
    const key: string = receivedStringValue();
    const value = sampleObject[key];
    console.log(value);

    // interface型にしているので、sampleTypeはstring | numberになってしまう
    // undefinedになる
    type sampleType = keyof typeof sampleObject;
    const key2: sampleType = receivedStringValue();
    const value2 = sampleObject[key2];
    console.log(value2);
}

{
    // interface StringKeyObject {
    //     // keyがstringで返り値がany
    //     [key :string]:any;
    // }

    const sampleObject = {
        aaa: 'AAA',
        bbb: 'BBB',
        ccc: 'CCC,'
    };

    type samplekeyType = keyof typeof sampleObject;

    const receivedStringValue = () => {
        const num = 1;
        if(num === 1){
            return 'aaa';
        }else if(num === 0){
            return 'bbb';
        }else{
            return 'ccc';
        }
    };
    
    // この場合は key "aaa" | "hhh" | "ccc" の型になる
    // const key: keyof typeof sampleObject = 'ddd';
    const key: keyof typeof sampleObject = receivedStringValue();
    const value = sampleObject[key];
    console.log(value);
}