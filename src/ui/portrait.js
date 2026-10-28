let portraitSerial = 0

function escapeXml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function shade(hex, amount) {
  const value = String(hex || '#7fe7d4').replace('#', '')
  const full = value.length === 3 ? value.split('').map((part) => part + part).join('') : value.padEnd(6, '0').slice(0, 6)
  const number = Number.parseInt(full, 16)
  const clamp = (part) => Math.max(0, Math.min(255, Math.round(part + 255 * amount)))
  const r = clamp((number >> 16) & 255)
  const g = clamp((number >> 8) & 255)
  const b = clamp(number & 255)
  return `#${[r, g, b].map((part) => part.toString(16).padStart(2, '0')).join('')}`
}

function eye(x, y, radius, color, flip = 1) {
  return `
    <ellipse cx="${x}" cy="${y}" rx="${radius * 1.12}" ry="${radius * 1.24}" fill="#f8ffff" opacity="0.94"/>
    <ellipse cx="${x + radius * 0.16 * flip}" cy="${y + radius * 0.02}" rx="${radius * 0.58}" ry="${radius * 0.84}" fill="${color}"/>
    <circle cx="${x + radius * 0.38 * flip}" cy="${y - radius * 0.38}" r="${Math.max(1, radius * 0.25)}" fill="#ffffff" opacity="0.92"/>`
}

function horn(x, y, scale, color) {
  return `<path d="M${x - 5 * scale} ${y} L${x + 1 * scale} ${y - 18 * scale} L${x + 6 * scale} ${y + 1 * scale} Z" fill="${shade(color, -0.12)}" stroke="${shade(color, -0.3)}" stroke-width="1"/>`
}

function quadruped(v, a, s) {
  return `
    <ellipse cx="101" cy="133" rx="48" ry="31" fill="${s}" opacity="0.92"/>
    <ellipse cx="98" cy="126" rx="40" ry="25" fill="${v.primary}"/>
    <path d="M135 124 C162 110 169 94 163 82" fill="none" stroke="${s}" stroke-width="10" stroke-linecap="round"/>
    <path d="M163 82 C172 92 174 106 168 116" fill="none" stroke="${a}" stroke-width="5" stroke-linecap="round" opacity="0.85"/>
    <g fill="${s}">
      <rect x="66" y="148" width="11" height="27" rx="5"/>
      <rect x="91" y="152" width="11" height="24" rx="5"/>
      <rect x="117" y="151" width="11" height="25" rx="5"/>
      <rect x="137" y="145" width="11" height="29" rx="5"/>
    </g>
    <circle cx="68" cy="107" r="32" fill="${v.primary}"/>
    <path d="M43 91 C29 72 35 61 51 68 L55 86 Z" fill="${v.secondary}"/>
    <path d="M84 88 C94 65 110 64 112 82 L101 94 Z" fill="${v.secondary}"/>
    <path d="M45 111 C34 124 37 136 52 138 C58 130 56 119 52 111 Z" fill="${v.primary}"/>
    <ellipse cx="62" cy="122" rx="22" ry="14" fill="${a}" opacity="0.5"/>
    <ellipse cx="66" cy="107" rx="6.4" ry="7.2" fill="#fff"/>
    <ellipse cx="68" cy="108" rx="3.5" ry="5" fill="${v.eye}"/>
    <circle cx="69" cy="105" r="1.5" fill="#fff"/>
    <circle cx="54" cy="124" r="3" fill="${shade(v.eye, 0.18)}"/>
    ${v.horns ? horn(84, 85, 0.95, a) : ''}
    <path d="M76 101 C84 97 93 99 98 105" fill="none" stroke="${a}" stroke-width="2" opacity="0.8"/>
    <path d="M104 113 C122 108 140 109 151 116" fill="none" stroke="${a}" stroke-width="3" opacity="0.38"/>`
}

function biped(v, a, s) {
  return `
    <ellipse cx="100" cy="149" rx="38" ry="12" fill="#050912" opacity="0.4"/>
    <path d="M78 136 C66 163 68 177 79 179 L87 178 L84 144 Z" fill="${s}"/>
    <path d="M121 136 C133 163 131 177 121 179 L113 178 L116 144 Z" fill="${s}"/>
    <rect x="52" y="119" width="10" height="47" rx="5" fill="${v.secondary}" transform="rotate(-13 57 140)"/>
    <rect x="139" y="119" width="10" height="47" rx="5" fill="${v.secondary}" transform="rotate(13 144 140)"/>
    <path d="M72 81 C66 103 70 136 85 141 L115 141 C131 134 135 103 127 81 Z" fill="${v.primary}"/>
    <path d="M83 85 C88 110 85 127 80 137 L100 137 L100 85 Z" fill="${s}" opacity="0.55"/>
    <ellipse cx="100" cy="106" rx="21" ry="25" fill="${a}" opacity="0.28"/>
    <path d="M102 126 C119 132 138 128 146 114" fill="none" stroke="${s}" stroke-width="8" stroke-linecap="round"/>
    <circle cx="100" cy="57" r="30" fill="${v.primary}"/>
    <path d="M71 48 C66 26 84 22 100 30 C116 19 135 28 128 49 C118 38 107 38 99 41 C90 36 78 40 71 48 Z" fill="${v.secondary}"/>
    <path d="M91 32 C92 17 108 16 111 32 C105 27 97 27 91 32 Z" fill="${a}"/>
    ${v.horns ? `<path d="M77 37 L64 15 L87 27 Z" fill="${a}"/>` : ''}
    ${eye(89, 58, 5, v.eye, 1)}
    ${eye(112, 58, 5, v.eye, -1)}
    <path d="M95 72 Q100 76 106 72" fill="none" stroke="${shade(v.eye, 0.1)}" stroke-width="2" stroke-linecap="round"/>
    <path d="M77 114 C87 122 99 124 112 117" fill="none" stroke="${a}" stroke-width="3" opacity="0.6"/>
    <circle cx="100" cy="116" r="5" fill="${a}" opacity="0.75"/>`
}

function flyer(v, a, s) {
  return `
    <path d="M78 102 C50 77 24 78 14 98 C29 104 35 120 53 127 C64 131 73 121 82 116 Z" fill="${s}" opacity="0.95"/>
    <path d="M122 102 C150 77 176 78 186 98 C171 104 165 120 147 127 C136 131 127 121 118 116 Z" fill="${s}" opacity="0.95"/>
    <path d="M79 102 C56 91 38 94 25 105 C44 109 57 120 71 121 Z" fill="${a}" opacity="0.72"/>
    <path d="M121 102 C144 91 162 94 175 105 C156 109 143 120 129 121 Z" fill="${a}" opacity="0.72"/>
    <path d="M86 86 C83 70 92 57 100 54 C108 57 117 70 114 86 L126 133 C112 146 88 146 74 133 Z" fill="${v.primary}"/>
    <circle cx="100" cy="63" r="27" fill="${v.primary}"/>
    <path d="M73 66 C65 45 79 36 100 42 C121 36 135 45 127 66 C116 55 108 53 100 57 C92 53 84 55 73 66 Z" fill="${v.secondary}"/>
    <path d="M89 42 L84 24 L99 37 Z" fill="${a}"/>
    <path d="M111 42 L117 24 L101 37 Z" fill="${a}"/>
    ${eye(89, 63, 5.4, v.eye, 1)}
    ${eye(111, 63, 5.4, v.eye, -1)}
    <path d="M94 77 L100 85 L107 77 Z" fill="${shade(v.eye, -0.1)}"/>
    <path d="M97 133 C102 151 113 158 128 156" fill="none" stroke="${s}" stroke-width="8" stroke-linecap="round"/>
    <path d="M128 156 L142 147 L134 160 L146 162 L126 168 Z" fill="${a}"/>
    <path d="M84 110 C94 117 108 117 117 109" fill="none" stroke="${a}" stroke-width="3" opacity="0.7"/>`
}

function aquatic(v, a, s) {
  return `
    <path d="M120 121 C148 103 165 79 157 59 C171 74 176 105 152 127 Z" fill="${s}" opacity="0.72"/>
    <ellipse cx="97" cy="119" rx="47" ry="30" fill="${v.primary}"/>
    <path d="M87 91 C92 72 112 67 126 84 C138 98 135 124 124 139 C112 153 83 151 73 134 C67 123 72 103 87 91 Z" fill="${v.primary}"/>
    <path d="M94 89 C82 72 92 55 105 61 C111 70 108 80 103 90 Z" fill="${a}"/>
    <path d="M107 86 C118 65 136 69 138 84 C133 94 122 98 112 95 Z" fill="${s}"/>
    <path d="M74 127 C51 127 37 140 41 153 C55 149 67 151 79 144 Z" fill="${a}" opacity="0.84"/>
    <path d="M119 101 C132 96 143 100 149 110 C139 113 129 119 119 116 Z" fill="${s}"/>
    ${eye(101, 98, 6, v.eye, 1)}
    <path d="M92 118 C102 124 115 121 121 114" fill="none" stroke="${shade(v.eye, 0.5)}" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="82" cy="110" r="3.4" fill="${a}" opacity="0.8"/>
    <circle cx="91" cy="87" r="2" fill="${a}" opacity="0.7"/>
    <path d="M57 104 C50 95 52 87 60 85 C67 91 64 99 62 104 Z" fill="${s}" opacity="0.8"/>
    <path d="M143 83 C152 74 161 78 160 88 C153 92 147 89 143 83 Z" fill="${a}" opacity="0.7"/>`
}

function serpent(v, a, s) {
  return `
    <path d="M70 157 C138 151 149 122 112 112 C77 103 58 84 76 65 C91 49 119 52 131 69" fill="none" stroke="${s}" stroke-width="25" stroke-linecap="round" opacity="0.72"/>
    <path d="M70 157 C138 151 149 122 112 112 C77 103 58 84 76 65 C91 49 119 52 131 69" fill="none" stroke="${v.primary}" stroke-width="16" stroke-linecap="round"/>
    <circle cx="130" cy="66" r="27" fill="${v.primary}"/>
    <path d="M106 58 C94 40 108 25 130 31 C150 36 157 53 150 67 C143 55 131 51 117 60 Z" fill="${v.secondary}"/>
    <path d="M111 47 C98 38 96 23 110 20 C122 24 126 36 121 47 Z" fill="${a}"/>
    <path d="M145 48 C158 37 170 43 168 57 C160 63 151 59 145 48 Z" fill="${a}"/>
    ${eye(131, 68, 5.4, v.eye, 1)}
    <path d="M129 86 C137 91 144 88 147 82" fill="none" stroke="${shade(v.eye, 0.3)}" stroke-width="2" stroke-linecap="round"/>
    <path d="M118 107 C110 109 103 108 97 104 M111 116 C102 119 94 118 87 114" fill="none" stroke="${a}" stroke-width="3" opacity="0.55"/>
    <circle cx="152" cy="58" r="3" fill="${v.eye}" opacity="0.9"/>`
}

function blob(v, a, s) {
  return `
    <ellipse cx="100" cy="132" rx="51" ry="36" fill="${s}" opacity="0.42"/>
    <path d="M55 122 C51 94 70 70 101 69 C135 68 154 93 148 123 C143 152 118 164 97 161 C74 158 59 146 55 122 Z" fill="${v.primary}" opacity="0.92"/>
    <path d="M67 116 C71 96 88 83 106 84 C126 85 139 99 137 117 C135 134 120 145 103 144 C84 143 71 133 67 116 Z" fill="${s}" opacity="0.55"/>
    <ellipse cx="103" cy="116" rx="18" ry="20" fill="${a}" opacity="0.75"/>
    <ellipse cx="103" cy="114" rx="9" ry="11" fill="${shade(a, 0.35)}"/>
    ${eye(89, 105, 5.1, v.eye, 1)}
    ${eye(117, 105, 5.1, v.eye, -1)}
    <path d="M95 126 Q102 133 110 125" fill="none" stroke="${shade(v.eye, 0.45)}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="75" cy="89" r="6" fill="${a}" opacity="0.55"/>
    <circle cx="127" cy="83" r="4" fill="${a}" opacity="0.5"/>
    <circle cx="137" cy="103" r="2.5" fill="${a}" opacity="0.55"/>
    <path d="M81 70 C84 57 91 51 100 52 C110 53 118 60 120 71" fill="none" stroke="${a}" stroke-width="4" stroke-linecap="round" opacity="0.7"/>`
}

function golem(v, a, s) {
  return `
    <ellipse cx="100" cy="158" rx="48" ry="11" fill="#050912" opacity="0.42"/>
    <path d="M72 91 L57 121 L64 147 L81 144 L84 110 Z" fill="${s}"/>
    <path d="M129 91 L145 120 L138 148 L120 144 L117 110 Z" fill="${s}"/>
    <path d="M79 86 L87 64 L115 63 L123 86 L131 139 L117 159 L85 158 L71 137 Z" fill="${v.primary}"/>
    <path d="M87 91 L99 86 L112 93 L117 131 L103 146 L89 130 Z" fill="${s}" opacity="0.64"/>
    <path d="M101 93 L96 108 L106 112 L99 127" fill="none" stroke="${a}" stroke-width="4" stroke-linecap="round" opacity="0.92"/>
    <path d="M77 63 L82 38 L101 48 L120 37 L124 64 Z" fill="${v.primary}"/>
    <path d="M84 55 L91 47 L98 56 M104 56 L112 47 L118 56" fill="none" stroke="${a}" stroke-width="4" stroke-linecap="round"/>
    ${eye(89, 62, 4.6, v.eye, 1)}
    ${eye(111, 62, 4.6, v.eye, -1)}
    <path d="M97 74 L104 74" stroke="${shade(v.eye, 0.3)}" stroke-width="3" stroke-linecap="round"/>
    <circle cx="78" cy="100" r="4" fill="${a}" opacity="0.7"/>
    <circle cx="124" cy="112" r="3" fill="${a}" opacity="0.65"/>
    <path d="M74 90 L68 83 M126 90 L133 82" stroke="${a}" stroke-width="3" opacity="0.5"/>`
}

function spirit(v, a, s) {
  return `
    <circle cx="100" cy="94" r="58" fill="none" stroke="${a}" stroke-width="1.5" opacity="0.45" stroke-dasharray="3 7"/>
    <path d="M77 84 C79 62 95 48 112 53 C132 59 139 81 127 98 C120 108 123 121 130 129 C113 137 100 127 96 117 C91 132 78 143 64 138 C75 125 70 112 66 103 C61 95 66 85 77 84 Z" fill="${v.primary}" opacity="0.9"/>
    <path d="M77 86 C83 68 100 58 115 63 C128 69 132 84 123 96 C117 105 117 114 122 121 C109 126 102 118 99 109 C95 121 85 130 74 126 C81 114 77 103 72 98 C68 91 70 86 77 86 Z" fill="${s}" opacity="0.42"/>
    <circle cx="100" cy="88" r="21" fill="${v.secondary}" opacity="0.72"/>
    ${eye(93, 85, 5.2, v.eye, 1)}
    ${eye(108, 85, 5.2, v.eye, -1)}
    <path d="M95 100 Q100 105 106 99" fill="none" stroke="${shade(v.eye, 0.4)}" stroke-width="2" stroke-linecap="round"/>
    <path d="M64 69 C52 58 59 45 70 52 C77 56 72 65 64 69 Z" fill="${a}" opacity="0.7"/>
    <path d="M136 72 C148 60 157 68 151 79 C146 87 140 81 136 72 Z" fill="${a}" opacity="0.62"/>
    <circle cx="65" cy="116" r="4" fill="${a}" opacity="0.55"/>
    <circle cx="137" cy="113" r="3" fill="${a}" opacity="0.6"/>
    <circle cx="120" cy="129" r="2" fill="${a}" opacity="0.5"/>
    ${v.horns ? `<path d="M81 58 L75 39 L90 50 Z" fill="${a}"/><path d="M119 58 L125 39 L110 50 Z" fill="${a}"/>` : ''}`
}

export function portraitSVG(species, options = {}) {
  if (!species) return ''
  const visual = species.visual || {}
  const v = {
    archetype: visual.archetype || 'quadruped',
    primary: visual.primary || '#7fe7d4',
    secondary: visual.secondary || '#2f7f82',
    accent: visual.accent || '#ffd166',
    eye: visual.eye || '#17351f',
    horns: Boolean(visual.horns),
    wings: Boolean(visual.wings),
    tail: Boolean(visual.tail),
    crown: Boolean(visual.crown),
    aura: Boolean(visual.aura)
  }
  const a = v.accent
  const s = v.secondary
  const id = `p${++portraitSerial}`
  let body
  switch (v.archetype) {
    case 'biped': body = biped(v, a, s); break
    case 'flyer':
    case 'wyvern': body = flyer(v, a, s); break
    case 'aquatic': body = aquatic(v, a, s); break
    case 'serpent': body = serpent(v, a, s); break
    case 'blob': body = blob(v, a, s); break
    case 'golem': body = golem(v, a, s); break
    case 'spirit': body = spirit(v, a, s); break
    default: body = quadruped(v, a, s)
  }
  const crown = v.crown ? `
    <g transform="translate(100 28)">
      <path d="M-16 8 L-20 -8 L-9 -2 L0 -14 L9 -2 L20 -8 L16 8 Z" fill="${a}" stroke="${shade(a, -0.2)}" stroke-width="1.5"/>
      <circle cx="0" cy="-12" r="3" fill="#fff"/>
    </g>` : ''
  const motes = Array.from({ length: 5 }, (_, index) => {
    const angle = (index / 5) * Math.PI * 2 + 0.6
    const x = 100 + Math.cos(angle) * (58 + (index % 2) * 7)
    const y = 100 + Math.sin(angle) * (54 + (index % 2) * 4)
    return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1.5 + (index % 2)).toFixed(1)}" fill="${a}" opacity="${0.32 + index * 0.04}"/>`
  }).join('')
  const cls = options.className || 'portrait-svg'
  return `
<svg class="${escapeXml(cls)}" viewBox="0 0 200 200" role="img" aria-label="${escapeXml(species.name)} portrait" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="${id}-halo" cx="50%" cy="48%" r="55%">
      <stop offset="0%" stop-color="${a}" stop-opacity="${v.aura ? 0.34 : 0.22}"/>
      <stop offset="62%" stop-color="${v.primary}" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#070b14" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-sheen" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.16"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    <filter id="${id}-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <circle cx="100" cy="101" r="92" fill="url(#${id}-halo)"/>
  <circle cx="100" cy="101" r="78" fill="none" stroke="${a}" stroke-opacity="0.19" stroke-width="1"/>
  <circle cx="100" cy="101" r="92" fill="none" stroke="${a}" stroke-opacity="0.08" stroke-width="1" stroke-dasharray="2 9"/>
  ${motes}
  <g ${v.aura ? `filter="url(#${id}-glow)"` : ''}>${body}</g>
  <rect x="4" y="4" width="192" height="192" rx="34" fill="url(#${id}-sheen)" opacity="0.5"/>
  ${crown}
</svg>`
}

export function portraitForCreature(creature, species, options = {}) {
  return portraitSVG(species, options)
}
