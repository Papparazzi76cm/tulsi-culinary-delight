import { CalendarDays } from 'lucide-react';

const ReservationWidget = () => (
  <section className="relative w-full rounded-xl border-2 border-accent/20 bg-card p-6 text-center shadow-tulsi">
    <CalendarDays className="mx-auto mb-4 h-10 w-10 text-accent" aria-hidden="true" />
    <h3 className="text-3xl font-bold text-accent mb-4 font-playfair">Reserva tu Mesa</h3>
    <p className="text-muted-foreground mb-6">El calendario de reservas se ofrece en Tableo. Al pulsar, se abrirá su servicio externo.</p>
    <a href="https://app.tableo.com/r/wyijJGK" target="_blank" rel="noopener noreferrer" className="btn-tulsi inline-flex items-center justify-center gap-2">Abrir calendario de reservas</a>
    <p className="text-sm text-muted-foreground mt-4">También puedes llamarnos al <a className="underline" href="tel:+34983844607">+34 983 84 46 07</a>.</p>
  </section>
);
export default ReservationWidget;
