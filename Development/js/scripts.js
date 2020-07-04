// قم بإنشاء الدوال التالية

/*
 * greet(name) اسم الدالة
 * - name قد تستقبل وقد لا تستقبل
 * - name إن لم تستقبل اسم أو "Hello" تطبع
 * - name إن استقبلت اسم أو "Hello <name>" تطبع
 */

function greet(name) {
 let massage = 'hello';
 if (name) {
     massage += name ;
     console.log(massage);
 }else {
     console.log(message);
 }
}
// great();
greet("batool");
/*
 * isOdd(n) اسم الدالة
 * - n تستقبل رقم
 * - عدا ذلك false إن كان الرقم فردياً وترجع true ترجع القيمة
 */
function isOdd(n) {
    if (n % 2 == 1){
        return true ; }
        else {return false }
}
 console.log (isOdd(5));
 console.log (isOdd(2));