export class MessageError {
	message: { id: string; key: string; value: string }[];

	constructor(_message: { id: string; key: string; value: string }[]) {
		this.message = _message;
	}
}
