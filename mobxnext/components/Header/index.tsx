import React from 'react'
import Link from 'next/link'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon  from "@material-ui/icons/ShoppingBasket";
import styles from './header.module.scss'
function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <img className={styles.logo} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQClZMqPY_6xM7wlYCHhzsAOh2kg-wFaRB2Gg&usqp=CAU" />
      </Link>
      <div className={styles.search}>
        <input className={styles.searchInput} type="test" />
        <SearchIcon className={styles.searchIcon} />
      </div>
      <div className={styles.nav}>
        <Link href= "/login" >{/*{!user && */}   
          <div className={styles.option} >
              {/* onClick={handleAuthentication} */}
            <span className={styles.optionLineOne}>
              Hello {/* {!user ? "Guest" : user.email} */}
            </span>
            <span className={styles.ontionLineTwo}>
              {" "}
              {/* {user ? "Sign Out" : "Sign In"} */}
            </span>
          </div>
        </Link>
        <Link href="/orders">
          <div className={styles.option}>
            <span className={styles.optionLineOne}>Returns</span>
            <span className={styles.ontionLineTwo}>& Orders</span>
          </div>
        </Link>
        <div className={styles.option}>
          <span className={styles.optionLineOne}>Your</span>
          <span className={styles.ontionLineTwo}>Prime</span>
        </div>
        <Link href="/checkout">
          <div className={styles.optionBasket}>
            <ShoppingBasketIcon/>
            <span className={styles.baseketCount}>
              {/* {basket?.length} */}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
