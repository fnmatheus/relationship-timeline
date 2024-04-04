import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-screen font-mono bg-white gap-2">
      <header className="flex flex-col w-full items-center mt-2 relative pt-2">
        <div className="relative font-cursive">
          <div className="absolute bottom-1 z-0 bg-[#7d373f] w-[325px] h-[10px] origin-bottom skew-x-[20deg] -skew-y-2" />
          <h1 className="text-[5rem] -skew-y-2 leading-[3.4rem] drop-shadow-title">Our Timeline</h1>
        </div>
        <h2 className="drop-shadow-sub-title text-2xl">remembering moments</h2>
      </header>
      <section className="flex flex-col items-center">
        <p className="mx-6 text-center">
        I know it&#39;s simple, but I wanted to show you how important our relationship is for me. I thought I wasn&#39;t ready for a new date but you proved me that I was wrong. You&#39;re so special and kindness.I can&#39;t imagine my life without you. Love u.
        </p>
        {/* <section className={styles.timeline}>
          {
            moments.map((moment) => (
              <div key={moment.date}>
                <div className={styles.momentHeader}>
                  <h3>{moment.title}</h3>
                  <h4>{moment.date}</h4>
                </div>
                <div className={styles.photoContainer}>
                  <img
                    className={styles.photo}
                    src={moment.photo}
                    alt=""
                  />
                </div>
              </div>
            ))
          }
        </section> */}
      </section>
    </main>
  );
}
