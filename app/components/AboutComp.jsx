import styles from "./AboutComp.module.css";

export default function AboutComp() {
  return (
    <div className={styles.videoCover}>
      <video className={styles.video} autoPlay muted loop playsInline>
        <source src="/cover-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}>
        <section className={styles.article}>
          <h2>עלינו</h2>
          <p>
            בימים מאתגרים אלה בריאות הנפש הפכה לרלוונטית מתמיד, כאשר הרבה מאיתנו
            מתמודדים עם מצבי סטרס קיצוני ומחלה בפעם הראשונה בחיינו ובעוד עבור
            חלק מאיתנו מדובר על התמודדות ארוכת שנים שעכשיו נהפכת לקשה עוד יותר.
          </p>
          <p>
            מערכת בריאות הנפש בישראל על נותני שירותיה מהמדינה, המגזר הפרטי
            ועמותות ללא כוונת רווח, מציעה מגוון טיפולים ושירותים עבור צרכני
            בריאות הנפש, אך עם זאת מדובר במערכת מורכבת ומסועפת ולעיתים מאד לא
            נגישה ולא כל הטיפולים והשירותים בה מוכרים לציבור הרחב.
          </p>
          <p>
            אנחנו כאן כדי להפוך את ההתמודדות לקצת פחות מאתגרת ולהנגיש את
            השירותים והמידע הנחוצים
          </p>
        </section>
      </div>
    </div>
  );
}
