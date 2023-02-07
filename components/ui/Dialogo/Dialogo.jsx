import * as C from '../'
import * as S from './Dialogo.styles'

export const Dialogo = ({ number = '977834196', setIsDialogOpen }) => {
  return (
    <>
      <S.Overlay onClick={() => setIsDialogOpen(false)} />
      <S.Dialog>
        <C.Form
          number={number}
          type="dialog"
          variant="dialog"
          setIsDialogOpen={setIsDialogOpen}
        />
      </S.Dialog>
    </>
  )
}
