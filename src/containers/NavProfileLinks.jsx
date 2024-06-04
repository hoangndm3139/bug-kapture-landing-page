import Link from "next/link"

function NavProfileLinks() {
    // const dispatch = useDispatch()
    // const { isLoggedIn, credits, token } = useSelector(state => state.user)

    // useEffect(() => {
    //     if (token) {
    //         dispatch(fetchUserDetail())
    //     }
    // }, [token])

    // const openLoginModal = () => {
    //     console.log("jere")
    //     dispatch(openModal({ title: "", size: "lg", bodyType: MODAL_BODY_TYPES.SIGN_IN_MODAL, extraObject: { isSignIn: true } }))
    // }

    // const openPricingModal = () => {
    //     console.log("jere")
    //     dispatch(openModal({ title: "", size: "lg", bodyType: MODAL_BODY_TYPES.PRICING_MODAL, extraObject: { isLoggedIn, darkbg: true } }))
    // }

    // const logoutUser = async () => {
    //     // await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/user/logout')
    //     localStorage.clear();
    //     dispatch(setLoggedIn(false))
    //     window.location = '/'
    // }

    // const handleDropDownClick = () => {
    //     const elem = document.activeElement;
    //     if (elem) {
    //         elem?.blur();
    //     }
    // };
    return (
        <Link href="/"><button className='btn md:mt-0 mt-4 normal-case hover:text-white text-white hover:bg-orange bg-orange text-base font-medium hover:border-white hover:opacity-95'>Get Started</button></Link>
    )
}


export default NavProfileLinks