import MonthCard from "../MonthCard/MonthCard";

export default function Stagionalita() {
  return (
    <div className="mx-auto max-w-4xl p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-8 text-green-600">
        Frutta e Verdura di Stagione
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MonthCard
          mese="Gennaio"
          verdure="barbabietole, belga, broccoli, carciofi, cardi, carote, catalogna, cavolfiori, cavolini di Bruxelles, cavolo cappuccio, cavolo cinese, cavolo nero, cavolo verza, cime di rapa, finocchi, lattuga, porri, radicchio, rape, riccia, scarola, sedano rapa, spinaci, topinambur, valerianella o soncino, zucca."
          frutte="arance, arance amare, cachi, limoni, mandarini, kiwi, pompelmi."
        />
        <MonthCard
          mese="Febbraio"
          verdure="barbabietole, belga, broccoli, carciofi, cardi, carote, cavolfiori, cavolini di Bruxelles, cavolo cappuccio, cavolo cinese, cavolo nero, cavolo verza, cime di rapa, crescione, finocchi, lattuga, porri, radicchio, rape, riccia, scarola, sedano rapa, spinaci, topinambur, valerianella o soncino, zucca"
          frutte="arance, cachi, cedri, kiwi, kumquat, limoni, mandarini, pompelmi."
        />
        <MonthCard
          mese="Marzo"
          verdure="aglio fresco, belga, carciofi, cavolfiori, cavolini di Bruxelles, cavolo cappuccio, cavolo cinese, cavolo nero, cavolo verza, cicoria, cipollotti, cipolle, crescione, finocchi, lattuga, patate, piselli, porri, radicchio, rape, ravanelli, riccia, rucola, scarola, scorzonera, sedano rapa, tarassaco."
          frutte="Farance, kiwi, kumquat, limoni, nespole del Giappone, pompelmi"
        />
        <MonthCard
          mese="Aprile"
          verdure="aglio fresco, asparagi, barba di frate, cavolfiori, cavolo cappuccio, cicoria, cipolle, cipollotti, fave, finocchi, patate, piselli, radicchio, rape, ravanelli, rucola, tarassaco"
          frutte="arance, fragole, limoni, kumquat, nespole del Giappone"
        />
        <MonthCard
          mese="Maggio"
          verdure="aglio fresco, asparagi, biete da costa, bietole erbette, cetrioli, cicoria, cipolle, cipollotti, crescione, fave, patate, piselli, pomodori, rape, ravanelli, rucola, scalogno, spinaci, taccole, tarassaco"
          frutte="amarene, ciliegie, fragole, nespole del Giappone"
        />
        <MonthCard
          mese="Giugno"
          verdure="aglio fresco, biete da costa, bietole erbette, cetrioli, cicoria, cipolle, fagioli freschi, fagiolini, fave, fiori di zucca, lattuga, patate, piselli, pomodori, ravanelli, rucola, scalogno, sedano, spinaci, taccole, zucchine"
          frutte="albicocche, amarene, anguria o cocomero, ciliegie, fragole, fragoline di bosco, meloni, pesche, ribes, susine, uvaspina"
        />
        <MonthCard
          mese="Luglio"
          verdure="belga, biete da costa, bietole erbette, carote, cetrioli, cicoria, cipolle, cipollotti, fagioli freschi, fagiolini, fiori di zucca, lattuga, melanzane, patate, peperoni, piselli, pomodori, rucola, scalogno, sedano, spinaci, zucchine"
          frutte="albicocche, amarene, anguria o cocomero, ciliegie, fichi, fragoline di bosco, lamponi, meloni, mirtilli, more, pesche, pinoli, ribes, susine, uvaspina"
        />
        <MonthCard
          mese="Agosto"
          verdure="barbabietole, belga, biete da costa, bietole erbette, carote, cavolo cappuccio, cavolo verza, cetrioli, cicoria, cipolle, fagioli freschi, fagiolini, fiori di zucca, lattuga, melanzane, patate, peperoni, peperoncini, pomodori, porri, rucola, scalogno, sedano, spinaci, zucchine"
          frutte="albicocche, anguria o cocomero, fichi, fragoline di bosco, lamponi, limoni verdelli, mele, meloni, mirtilli, more, nocciole, noci, pere, pesche, pinoli, prugne, ribes, susine, uva, uvaspina"
        />
        <MonthCard
          mese="Settembre"
          verdure="barbabietole rosse, belga, biete da costa, bietole erbette, carote, cavolfiori, cavolo cappuccio bianco e rosso, cavolo verza, cetrioli, cicoria, cipolle, fagioli freschi, fagiolini, finocchi, lattuga, melanzane, patate, peperoni, pomodori, porri, rape, rucola, scalogno, sedano, spinaci, valerianella o soncino, zucca, zucchine"
          frutte="anguria o cocomero, cotogne, fichi, fichi d’India, limoni, lamponi, mandorle, mele, melagrane, mirtilli, more, nashi (pere asiatiche) nocciole, noci, percoche, pere, pesche, pinoli, ribes, susine, uva, uvaspina"
        />
        <MonthCard
          mese="Ottobre"
          verdure="barbabietole, belga, biete da costa, bietole erbette, broccoli, carciofi, cardi, carote, cavolfiori, cavolo cappuccio bianco e rosso, cavolo cinese, cavolo nero, cavolo verza, cetrioli, cime di rapa, finocchi, lattuga, melanzane, patate, patate dolci, pomodori, porri, radicchio, rape, riccia, rucola domestica, scarola, scorzonera, sedano, sedano rapa, spinaci, valerianella o soncino, zucca"
          frutte="alchechengi, cachi, carrube, castagne, cedri, cotogne, fichi, fichi d’India, limoni, mandorle, mapo, melagrane, mele, mele cotogne, nocciole, noci, pere, pinoli, pistacchi, susine, uva"
        />
        <MonthCard
          mese="Novembre"
          verdure="barbabietole, belga, biete da costa, bietole erbette, broccoli, carciofi, cardi, carote, cavolfiori, cavolini di Bruxelles, cavolo cappuccio bianco e rosso, cavolo cinese, cavolo nero, cavolo verza, cime di rapa, finocchi, lattuga, patate, patate dolci, porri, radicchio, rape, riccia, rucola, scarola, scorzonera, sedano sedano rapa, spinaci, topinambur, valerianella o soncino, zucca"
          frutte="alchechengi, arance, cachi, castagne, carrube, cedri, cotogne, fichi d’India, kiwi, limoni, mandarini, mandorle, mapo, melagrane, mele, mele cotogne, nespole nostrane, nocciole, noci, pere, pistacchi, pompelmi, uva"
        />
        <MonthCard
          mese="Dicembre"
          verdure="barbabietole, belga, broccoli, carciofi, cardi, carote, cavolfiori, cavolini di Bruxelles, cavolo cappuccio bianco e rosso, cavolo cinese, cavolo nero, cavolo verza, cime di rapa, crescione, finocchi, lattuga, porri, radicchio, rape, riccia, scarola, scorzonera, sedano rapa, spinaci, topinambur, valerianella o soncino, zucca"
          frutte="arance, avocado, cachi, castagne, cedri, kiwi, limoni, mandaranci, mandarini, mele, melagrane, nespole nostrane, pere, pompelmi"
        />
      </div>
    </div>
  );
}
