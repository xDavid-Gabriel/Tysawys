import * as S from './SocialNetworks.styles'
import * as C from '../'

export const SocialNetworks = ({ setIsDialogOpen }) => {
  return (
    <S.SocialNetworks>
      <C.Button
        as="button"
        variant="whatsapp"
        onClick={() => setIsDialogOpen(true)}
      >
        <S.Whatsapp size={50} color="white" css={C.ScaleLink} />
      </C.Button>
    </S.SocialNetworks>
  )
}
