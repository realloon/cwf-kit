export class Texture {
  name: string
  src: string = ''
  x: number = 0
  y: number = 0
  scale: number = 1
  shouldDisplay: boolean = true
  isMasked: boolean = false

  constructor(name: string) {
    this.name = name
  }

  get isDisplay() {
    return this.src && this.shouldDisplay
  }

  get style() {
    return `left: ${this.x}px; bottom: ${this.y}px; transform: scale(${this.scale});`
  }

  update(e: Event) {
    const file = (e.target as HTMLInputElement)?.files?.[0]
    if (!file) return
    this.src = URL.createObjectURL(file)
  }
}
