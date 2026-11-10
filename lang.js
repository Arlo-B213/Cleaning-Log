// Language support for the Cleaning Log. Loaded before the app script.
// Staff-facing text is translated here. Manager tools stay in English.
const CL_STR = {
  en: {
    tutorial: "Tutorial", tutorialTitle: "How to use the Cleaning Log", tutorialCtx: "A short video in your language.",
    days: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    daysLong: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    title: "Cleaning Checklist", subtitle: "Weekly Sign-Off",
    viewWeek: "Week view", viewDay: "Day view", allAreas: "All areas", back: "← Back",
    thisWeek: "This week", prevWeek: "Previous week", nextWeek: "Next week", areaLabel: "Area",
    loading: "Loading…",
    legendNow: "Now – sign this one", legendSigned: "Signed", legendMissed: "Missed", legendUp: "Upcoming",
    currentSlot: "Current slot · {day}", dueLabel: "Due now · {day} · {area}",
    signedNow: "Signed by <b>{by}</b> at {time}. Next slot starts {next}.",
    signNow: "Sign off now", slot: "slot",
    statSigned: "Slots signed", statMissed: "Missed", statLate: "Signed late", statChecked: "Days checked",
    early: "{day} early", pSigned: "Signed", pLate: "Late", pNow: "Due now", pMiss: "Missed", pUp: "Upcoming",
    tapSign: "Tap to sign", checkedBy: "Checked by", tapVerify: "Tap to verify this day",
    managerVerifies: "Manager verifies the day", verified: "Verified", at: "at {time}",
    signNowCell: "Sign now", lateCell: "late", missedCell: "missed", timeSlot: "Time slot",
    signTitle: "Sign off cleaning",
    passedNote: "This slot has already passed. It will be saved as a <b>late sign-off</b> with the actual time ({time}).",
    nameLabel: "Your name or initials", namePh: "e.g. Linda",
    noteLabel: "Note (optional)", notePh: "Anything the next shift should know",
    cancel: "Cancel", signOk: "✓ Sign off", alreadySigned: "Someone already signed this slot",
    thanks: "Signed off — thank you, {by}!",
    ctxSlot: "{time} slot", earlyMorning: "{day} {date} early morning",
    detailTitle: "Signed off ✓", signedBy: "Signed by", timeLabel: "Time", noteShort: "Note",
    removeBtn: "Remove", close: "Close", confirmRemove: "Remove {by}'s sign-off for this slot?",
    removed: "Sign-off removed",
    onTrack: "On track", dueNowShort: "Due now", missedToday: "Missed today",
    notSignedYet: "Current slot not signed yet", signedByShort: "Signed by <b>{by}</b> at {time}",
    todayLabel: "Today:", signedWord: "signed", missedWord: "missed", weekMissed: "Week missed:",
    verifiedShort: "verified ✓", notVerified: "not verified", dueAt: "Due {time}", todaysSlots: "Today's slots",
    dbDenied: "The database refused access. Check that the Firestore security rules from the README are published.",
    dbDown: "Can't reach the database right now ({code}). Entries will retry when the connection is back.",
    printTitle: "CLEANING CHECKLIST – WEEKLY SIGN-OFF", weekStarting: "Week starting:", areaWord: "Area:",
    firstTimeWord: "First time:", printFoot: "Printed {when} from the digital Cleaning Log. Shaded cells = missed slot.",
    qrHeading: "Cleaning Checklist – Sign-Off", qrText: "Scan with your phone camera to sign off your cleaning slot.",
    csvHead: ["Area","Week starting","Day","Date","Time slot","Status","Signed by","Signed at","Late","Note"],
    csvStatus: {signed:"Signed", miss:"Missed", now:"Due now", up:"Upcoming"}, csvVerified: "Verified", csvLate: "Yes"
  },
  es: {
    tutorial: "Tutorial", tutorialTitle: "Cómo usar el Registro de Limpieza", tutorialCtx: "Un video corto en su idioma.",
    days: ["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"],
    daysLong: ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"],
    title: "Lista de limpieza", subtitle: "Firma semanal",
    viewWeek: "Vista semanal", viewDay: "Vista del día", allAreas: "Todas las áreas", back: "← Volver",
    thisWeek: "Esta semana", prevWeek: "Semana anterior", nextWeek: "Semana siguiente", areaLabel: "Área",
    loading: "Cargando…",
    legendNow: "Ahora – firme este", legendSigned: "Firmado", legendMissed: "Pendiente", legendUp: "Próximo",
    currentSlot: "Turno actual · {day}", dueLabel: "Le toca ahora · {day} · {area}",
    signedNow: "Firmado por <b>{by}</b> a las {time}. El siguiente turno empieza a las {next}.",
    signNow: "Firmar ahora", slot: "turno",
    statSigned: "Turnos firmados", statMissed: "Pendientes", statLate: "Firmados tarde", statChecked: "Días verificados",
    early: "{day} temprano", pSigned: "Firmado", pLate: "Tarde", pNow: "Le toca", pMiss: "Pendiente", pUp: "Próximo",
    tapSign: "Toque para firmar", checkedBy: "Verificado por", tapVerify: "Toque para verificar este día",
    managerVerifies: "El gerente verifica el día", verified: "Verificado", at: "a las {time}",
    signNowCell: "Firmar ahora", lateCell: "tarde", missedCell: "pendiente", timeSlot: "Turno",
    signTitle: "Firmar limpieza",
    passedNote: "Este turno ya pasó. Se guardará como <b>firma tardía</b> con la hora real ({time}).",
    nameLabel: "Su nombre o iniciales", namePh: "p. ej. Linda",
    noteLabel: "Nota (opcional)", notePh: "Algo que el siguiente turno deba saber",
    cancel: "Cancelar", signOk: "✓ Firmar", alreadySigned: "Alguien ya firmó este turno",
    thanks: "Firmado — ¡gracias, {by}!",
    ctxSlot: "turno de {time}", earlyMorning: "{day} {date} de madrugada",
    detailTitle: "Firmado ✓", signedBy: "Firmado por", timeLabel: "Hora", noteShort: "Nota",
    removeBtn: "Quitar", close: "Cerrar", confirmRemove: "¿Quitar la firma de {by} de este turno?",
    removed: "Firma quitada",
    onTrack: "Al día", dueNowShort: "Le toca", missedToday: "Pendientes hoy",
    notSignedYet: "El turno actual aún no está firmado", signedByShort: "Firmado por <b>{by}</b> a las {time}",
    todayLabel: "Hoy:", signedWord: "firmados", missedWord: "pendientes", weekMissed: "Pendientes de la semana:",
    verifiedShort: "verificado ✓", notVerified: "sin verificar", dueAt: "Le toca {time}", todaysSlots: "Turnos de hoy",
    dbDenied: "La base de datos rechazó el acceso. Revise que las reglas de seguridad de Firestore del README estén publicadas.",
    dbDown: "No se puede conectar con la base de datos ({code}). Los registros se reintentarán cuando vuelva la conexión.",
    printTitle: "LISTA DE LIMPIEZA – FIRMA SEMANAL", weekStarting: "Semana que empieza:", areaWord: "Área:",
    firstTimeWord: "Primer turno:", printFoot: "Impreso {when} desde el Registro digital de limpieza. Celdas sombreadas = turno pendiente.",
    qrHeading: "Lista de limpieza – Firma", qrText: "Escanee con la cámara de su teléfono para firmar su turno de limpieza.",
    csvHead: ["Área","Semana que empieza","Día","Fecha","Turno","Estado","Firmado por","Firmado a las","Tarde","Nota"],
    csvStatus: {signed:"Firmado", miss:"Pendiente", now:"Le toca", up:"Próximo"}, csvVerified: "Verificado", csvLate: "Sí"
  },
  tl: {
    tutorial: "Tutorial", tutorialTitle: "Paano gamitin ang Cleaning Log", tutorialCtx: "Maikling video sa inyong wika.",
    days: ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
    daysLong: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    title: "Cleaning Checklist", subtitle: "Weekly Sign-Off",
    viewWeek: "Week view", viewDay: "Day view", allAreas: "Lahat ng area", back: "← Balik",
    thisWeek: "Ngayong linggo", prevWeek: "Nakaraang linggo", nextWeek: "Susunod na linggo", areaLabel: "Area",
    loading: "Naglo-load…",
    legendNow: "Ngayon – i-sign ito", legendSigned: "Signed", legendMissed: "Missed", legendUp: "Susunod",
    currentSlot: "Kasalukuyang slot · {day}", dueLabel: "Due na ngayon · {day} · {area}",
    signedNow: "Na-sign ni <b>{by}</b> ng {time}. Magsisimula ang susunod na slot ng {next}.",
    signNow: "Sign off now", slot: "slot",
    statSigned: "Na-sign na slot", statMissed: "Missed", statLate: "Signed late", statChecked: "Na-verify na araw",
    early: "{day} early", pSigned: "Signed", pLate: "Late", pNow: "Due now", pMiss: "Missed", pUp: "Susunod",
    tapSign: "I-tap para mag-sign", checkedBy: "Checked by", tapVerify: "I-tap para i-verify ang araw",
    managerVerifies: "Ive-verify ng manager ang araw", verified: "Verified", at: "ng {time}",
    signNowCell: "Sign now", lateCell: "late", missedCell: "missed", timeSlot: "Time slot",
    signTitle: "Sign off cleaning",
    passedNote: "Lumipas na ang slot na ito. Ise-save ito bilang <b>late sign-off</b> na may totoong oras ({time}).",
    nameLabel: "Pangalan o initials ninyo", namePh: "hal. Linda",
    noteLabel: "Note (optional)", notePh: "Anumang dapat malaman ng susunod na shift",
    cancel: "Cancel", signOk: "✓ Sign off", alreadySigned: "May nakapag-sign na ng slot na ito",
    thanks: "Na-sign off — salamat, {by}!",
    ctxSlot: "{time} slot", earlyMorning: "{day} {date} madaling araw",
    detailTitle: "Signed off ✓", signedBy: "Signed by", timeLabel: "Oras", noteShort: "Note",
    removeBtn: "Remove", close: "Close", confirmRemove: "Alisin ang sign-off ni {by} sa slot na ito?",
    removed: "Na-remove ang sign-off",
    onTrack: "On track", dueNowShort: "Due now", missedToday: "Missed ngayon",
    notSignedYet: "Hindi pa na-sign ang kasalukuyang slot", signedByShort: "Na-sign ni <b>{by}</b> ng {time}",
    todayLabel: "Ngayon:", signedWord: "signed", missedWord: "missed", weekMissed: "Missed sa linggo:",
    verifiedShort: "verified ✓", notVerified: "hindi pa verified", dueAt: "Due {time}", todaysSlots: "Slots ngayon",
    dbDenied: "Tinanggihan ng database ang access. Tiyaking nai-publish ang Firestore security rules mula sa README.",
    dbDown: "Hindi maabot ang database ngayon ({code}). Mare-retry ang mga entry kapag bumalik ang connection.",
    printTitle: "CLEANING CHECKLIST – WEEKLY SIGN-OFF", weekStarting: "Week starting:", areaWord: "Area:",
    firstTimeWord: "First time:", printFoot: "Printed {when} from the digital Cleaning Log. Shaded cells = missed slot.",
    qrHeading: "Cleaning Checklist – Sign-Off", qrText: "Scan with your phone camera to sign off your cleaning slot.",
    csvHead: ["Area","Week starting","Day","Date","Time slot","Status","Signed by","Signed at","Late","Note"],
    csvStatus: {signed:"Signed", miss:"Missed", now:"Due now", up:"Upcoming"}, csvVerified: "Verified", csvLate: "Yes"
  }
};
const CL_LOCALE = { en: "en-US", es: "es-MX", tl: "fil-PH" };
const CL_LANG_NAMES = { en: "EN", es: "ES", tl: "TL" };
let CL_LANG = "en";
try { const saved = JSON.parse(localStorage.getItem("cl_lang")); if (CL_STR[saved]) CL_LANG = saved; } catch {}

// Look up a string in the current language, falling back to English. {name} placeholders are filled from vars.
function t(key, vars){
  let s = CL_STR[CL_LANG][key] ?? CL_STR.en[key] ?? key;
  if (vars) for (const k in vars) s = s.split("{"+k+"}").join(vars[k]);
  return s;
}
function dayName(i){ return CL_STR[CL_LANG].days[i]; }
function dayLong(i){ return CL_STR[CL_LANG].daysLong[i]; }
function clLocale(){ return CL_LOCALE[CL_LANG]; }
function setLang(l){
  if (!CL_STR[l]) return;
  CL_LANG = l;
  try { localStorage.setItem("cl_lang", JSON.stringify(l)); } catch {}
  applyStatic();
}
// Fill in every element marked with data-t (text), data-tp (placeholder) or data-ta (aria-label).
function applyStatic(){
  document.documentElement.lang = CL_LANG === "tl" ? "fil" : CL_LANG;
  document.querySelectorAll("[data-t]").forEach(el => el.textContent = t(el.dataset.t));
  document.querySelectorAll("[data-ta]").forEach(el => el.setAttribute("aria-label", t(el.dataset.ta)));
  document.querySelectorAll("[data-tt]").forEach(el => el.setAttribute("title", t(el.dataset.tt)));
  const sel = document.getElementById("langSel");
  if (sel) sel.value = CL_LANG;
}
