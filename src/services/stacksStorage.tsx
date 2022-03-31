import { StackState } from '../routes/Tasks/reducers/types'
import { v4 } from 'uuid'

const stacksMock = {
  [v4()]: {
    name: 'Quater 1',
    colorClass: 'q1-color',
    icon: 'q1',
    tasks: []
  },
  [v4()]: {
    name: 'Quater 2',
    colorClass: 'q2-color',
    icon: 'q2',
    tasks: []
  },
  [v4()]: {
    name: 'Quater 3',
    colorClass: 'q3-color',
    icon: 'q3',
    tasks: []
  },
  [v4()]: {
    name: 'Quater 4',
    colorClass: 'q4-color',
    icon: 'q4',
    tasks: []
  }
}
const key = 'persist:tasks'

const StacksStorage = {
  getStacks: () => {
    if (!localStorage.getItem(key)) {
      localStorage.setItem(key, JSON.stringify(stacksMock))
    }

    try {
      const stacks: StackState = JSON.parse(localStorage.getItem(key) || '{}')
      return stacks
    } catch {
      localStorage.clear()
      return {}
    }
  },
  updateStacks: (updatedStacks: StackState) => {
    return localStorage.setItem(key, JSON.stringify(updatedStacks))
  }
}


export default StacksStorage