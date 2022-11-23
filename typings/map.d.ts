export interface Position {
	latitude: number
	longitude: number
	height?: number
}
export interface PositionItem {
	position: Position
}

export type NoticeType = 'warn-active' | 'warn-relieve'
