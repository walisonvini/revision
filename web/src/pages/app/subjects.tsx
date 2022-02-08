import { Container } from "../../components/app/container"
import { Blocks } from "../../components/app/Subjects/blocks"
import { Search } from "../../components/app/Subjects/search"
import { Notebook } from "../../components/app/Subjects/notebook"
import { ModalProvider } from "../../contexts/ModalContext"

import styles from "../../styles/pages/app/subjects.module.scss"
import withAuth from "../../utils/withAuth"

function Subjects() {
    return(
        <Container>
            <ModalProvider>
                <Notebook />
                <div className={styles.searchContainer}>
                    <Search />
                </div>
                <div className={styles.blockContainer}>
                    <Blocks />
                    <Blocks />
                    <Blocks />
                    <Blocks />
                    <Blocks />
                    <Blocks />
                    <Blocks />
                    <Blocks />
                    <Blocks />
                    <Blocks />
                </div>
            </ModalProvider>
        </Container>
    )
}

export default withAuth(Subjects);