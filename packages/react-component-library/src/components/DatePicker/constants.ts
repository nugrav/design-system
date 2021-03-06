import { FLOATING_BOX_ARROW_POSITION } from '../../primitives/FloatingBox'

const DATEPICKER_PLACEMENT = {
  ABOVE: 'above',
  BELOW: 'below',
  LEFT: 'left',
  RIGHT: 'right'
} as const

const DATEPICKER_PLACEMENTS = {
  [DATEPICKER_PLACEMENT.ABOVE]: {
    OFFSET: '8px 15px',
    ATTACHMENT: 'bottom left',
    TARGET_ATTACHMENT: 'top center',
    ARROW_POSITION: FLOATING_BOX_ARROW_POSITION.BOTTOM_LEFT
  },
  [DATEPICKER_PLACEMENT.BELOW]: {
    OFFSET: '-8px 15px',
    ATTACHMENT: 'top left',
    TARGET_ATTACHMENT: 'bottom center',
    ARROW_POSITION: FLOATING_BOX_ARROW_POSITION.TOP_LEFT
  },
  [DATEPICKER_PLACEMENT.LEFT]: {
    OFFSET: '5px 8px',
    ATTACHMENT: 'bottom right',
    TARGET_ATTACHMENT: 'bottom left',
    ARROW_POSITION: FLOATING_BOX_ARROW_POSITION.RIGHT_BOTTOM
  },
  [DATEPICKER_PLACEMENT.RIGHT]: {
    OFFSET: '5px -8px',
    ATTACHMENT: 'bottom left',
    TARGET_ATTACHMENT: 'bottom right',
    ARROW_POSITION: FLOATING_BOX_ARROW_POSITION.LEFT_BOTTOM
  }
}

export {
  DATEPICKER_PLACEMENT,
  DATEPICKER_PLACEMENTS,
}
