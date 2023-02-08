import Navbar from '/components/Navbar.jsx'
import Header from '/components/header.js'
import Footer from '/components/footer.js'
import Head from 'next/head'
import Image from 'next/image'

export default function Oskoli() {
    return(
       <div>
        <Head>

        </Head>
        <main>

<section className=' '>
    <Header />
    <Navbar />
    
</section>
<section>

 <div className=''> 
 
      <div className='  mt-28 text-justify  max-w-6xl m-auto relative   z-10 '>
     
            <h1 className=' pb-32  font-bold text-yellow-600  text-center sm:text-2xl'>Постигнућа у претходном периоду</h1>
            <h2 className=' font-bold  ml-10   sm:text-2xl'>Најважнији успјеси школе</h2>

            <p className='m-4 text-m sm:text-xl'>Иако мала, наша школа је поносна на сваки успијех ђака. Наши ђаци су учесници многобројних такмичења на свим нивоима. 
Посебно бисмо издвојили спортска такмичења гдје освајамо запажене резултате како у екипном тако и у индивидуалним дисциплинама чиме показујемо да његујемо и подржавамо спортски дух и фер-плеј. Издвојили бисмо освојена четири прва мјеста на регионалном такмичењу из спортске гимнастике у дисциплинама партер, греда и прескок, и друго мјесто на регионалном такмичењу из атлетике. 
Са поносом можемо рећи не мањка ни знања, прошле године наши ученици су учествовали у квизу “Научи се човјече” у коме су учешће узеле 32 школе из 28 општина, а ученици наше школе су стигли до полуфинала. 
Успјеси наше школе се огледају и у стварању што бољих услова за боравак и рад како ученика тако и свих запослених, води се рачуна о здравствено-хигијенским условима а међу приоритетима нам је безбједност, стим у вези смо преко пројекта и уз подршку World Vision-а набавили и поставили видео надзор у централној школи и у подручном одјељењу у Брањеву.
Протекли период је обиљежен уређењем школе и школског простора, у пројекту који је подржан од стране Владе Републике Српске и општине Зворник извршена је комплетна реконструкција централне школе. Школа је добила потпуно нови изглед, урађена је фасада, замјењена је столарија, измјењен је ентеријер школе, ходник је адаптиран новим керамичким плочицама и замјеном врата на учионицама и канцеларијама. За наредни период је планирано да се изврши реконструкција школске сале и вц-а. 
Кроз пројекат смо успјели и да обогатимо школску библиотеку, извршена је набавка нових књига што ће свим ученицима омогућити да лакше испуњавају школске обавезе и да развијају културу читања. 
Web страница је у изради.  </p>

<img className=' flex m-auto' src="/Image (12).jpeg" alt="" />
        </div>
       

 </div>
</section>
    <section>
        <Footer />
    </section>
        </main>
       </div>
    )
}