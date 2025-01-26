function checkVowels(){
    let txt=document.getElementById('textarea').value;
    let c=0;
    txt=txt.toLowerCase();
    for(let i=0;i<txt.length;i++){
        let ch=txt.charAt(i);
        if(isVowel(ch)){
            c=c+1;
        }
    }
    const result=document.getElementById('Res');
    result.textContent="Total Vowels in the Text: "+c;
}
function isVowel(ch){
    let vowels=['a','e','i','o','u'];
    return vowels.includes(ch);
}