import { DummyEvent } from "../generated/Contract/Contract"
import { DummyEntity } from "../generated/schema"

export function handleDummyEvent(event: DummyEvent): void {
    let entity = new DummyEntity(event.transaction.hash.toHex())
    entity.value = event.params.value
    entity.save()
}
