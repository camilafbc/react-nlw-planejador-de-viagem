import { ArrowRight, UserRoundPlus } from "lucide-react";

interface InviteGuestsStepProps{
    openGuestsModal: () => void,
    emailsToInvite: string[],
    openConfirmTripModal: () => void
}

export function InviteGuestsStep({
    openGuestsModal,
    emailsToInvite,
    openConfirmTripModal
}: InviteGuestsStepProps){

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shapeShadow gap-3">
            <button type='button' onClick={openGuestsModal} className='flex items-center gap-2 flex-1'>
                <UserRoundPlus className='size-5 text-zinc-400' />
                {emailsToInvite.length > 0 ? (
                  <span className="bg-transparent text-lg text-zinc-100 flex-1 text-left">{emailsToInvite.length.toString()} pessoa(s) convidada(s)</span>
                ) : (
                  <span className="bg-transparent text-lg text-zinc-400 flex-1 text-left">Quem estará na viagem</span>
                )}
            </button>
              
            <div className='w-px h-6 bg-zinc-800' />

            <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'
                onClick={openConfirmTripModal}
            >
                Confirmar Viagem
                <ArrowRight className='size-5 text-lime-950'/>
            </button>
        </div>
    )
}