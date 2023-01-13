import React, { useState } from 'react';
import Styles from './discription.module.scss'
import { IoIosArrowBack } from 'react-icons/io'
import Discriptionshowingbtn from './discriptionshowingbtn.component';
const Discription = () => {
    const [showCloseBtn, setShowCloseBtn] = useState(false);
    function showMore() {
        setShowCloseBtn(true)
    }
    function showLess() {
        setShowCloseBtn(false)
    }
    return (
        <div className={Styles.discription_patern}>
            <h3> معرفی اجمالی:</h3>
            <div>
                <p >گوشی موبایل «iPhone 11» یکی از سه گوشی شرکت اپل است که در کنفرانس سال 2019 این شرکت معرفی شد. این گوشی نسبت به گوشی‌های Pro و Pro Max قیمت پایین‌تری دارد اما طراحی مشابهی با این محصولات دارد. یکی از اصلی‌ترین تفاوت‌های این گوشی با دو گوشی دیگر، نمایشگر آیفون 11 است به فناوری Liquid Retina مجهز ‌شده است تا قیمت تمام شده کم‌تری داشته باشد. البته این نمایشگر رزولوشن رضایت‌بخشی دارد؛ به‌طوری‌که در اندازه­‌ی 6.1 اینچی‌اش، حدود 326 پیکسل را در هر اینچ جا داده است که میزان مطلوبی به حساب می‌‍آید. قاب پشتی آیفون جدید هم از شیشه ساخته‌ شده تا هم گوشی مشکل آنتن‌‌دهی نداشته باشد و هم امکان شارژ بی‌‌سیم باتری در این گوشی وجود داشته باشد. البته قابی آلومینیومی این بدنه شیشه‌ای را در خود جای داده است. این بدنه­‌ی زیبا در مقابل خط‌‌وخش مقاومت زیادی دارد؛ پس خیالتان از این بابت که آب و گردوغبار به‌‌راحتی روی آیفون 11 تأثیر نمی‌‌گذارد، راحت باشد. علاوه‌براین لکه و چربی هم روی این صفحه‌نمایش باکیفیت تأثیر چندانی ندارند اما این هم پایان کار نیست، آیفون جدید می‌تواند به مدت 30 دقیقه در عمق 2 متری آب دوام بیاورد. تشخیص چهره با استفاده از دوربین جلو دیگر ویژگی است که در آیفون جدید اپل به کار گرفته شده است. اما جالب‌ترین و واضح‌ترین تفاوت در این محصول جدید، دوربین‌هایی است که به شکل دوگانه در قاب پشتی جا خوش کرده‌اند. دو دوربین با سنسورهای 12مگاپیکسلی عکس‌هایی با کیفیتِ کاملاً رضایت‌بخش را به کاربر هدیه می‌دهد. دو دوربین که یکی از آن‌ها SL سه‌بعدی است هم دیگر به‌روزرسانی در آیفون 11 است. قابلیت اتصال به شبکه­‌های 4G، بلوتوث نسخه‌ی 5، نسخه­‌ی 13 از iOS  دیگر ویژگی‌های این گوشی هستند. ازنظر سخت‌‌افزاری هم این گوشی از تراشه­‌ی جدید A13 بهره می‌برد که تا بتواند علاوه بر کارهای معمول، از قابلیت‌های جدید واقعیت مجازی که اپل این روزها روی آن تمرکز خاصی دارد، پشتیبانی کند. گوشی جدید اپل به باتری 3110 میلی‌آمپرساعتی، فناوری شارژ سریع PD2.0، فناوری شارژ بی‎‌سیم و استاندارد صوتی دالبی هم مجهز شده است. این محصول در کشور هند اسمبل شده است.</p>
            </div>
            {!showCloseBtn ? <Discriptionshowingbtn onClick={showMore}>
                بیشتر
            </Discriptionshowingbtn> : ''}
            {showCloseBtn ? <Discriptionshowingbtn onClick={showLess}>
                بستن
            </Discriptionshowingbtn> : ''}
        </div>
    );
}

export default Discription;
