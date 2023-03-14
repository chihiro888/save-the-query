// ** Module
import { useDispatch } from 'react-redux'

// ** Core
import HeaderContainer from 'src/components/core/header-container'
import AddContainer from 'src/components/core/add-container'
import SearchContainer from 'src/components/core/search-container'
import ListContainer from 'src/components/core/list-container'

// ** API
import {
  createUser,
  deleteUser,
  getUserDetail,
  getUserList,
  updateUserIntro,
  updateUserPassword,
  updateUserProfile,
  updateUserRole,
  updateUserUsername
} from 'src/apis/user'

// ** Redux
import {
  setPageHeader,
  setTableHeader,
  setAddForm,
  setSearchForm,
  setDetailForm,
  setListAPI,
  setCreateAPI,
  setDetailAPI,
  setDeleteAPI,
  setActionList,
  setLoadAPI,
  initData
} from 'src/store/apps/crud'
import { useEffect } from 'react'
import { AppDispatch } from 'src/store'
import Content from 'src/components/user/content'

const Admin = () => {
  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // NOTE 리스트 조회 API 정의
    dispatch(setListAPI(getUserList))

    // NOTE 생성 API 정의
    dispatch(setCreateAPI(createUser))

    // NOTE 상세 API 정의
    dispatch(setDetailAPI(getUserDetail))

    // NOTE 삭제 API 정의
    dispatch(setDeleteAPI(deleteUser))

    // NOTE 페이지 헤더 정의
    dispatch(
      setPageHeader({
        title: '사용자 관리',
        subTitle: '사용자를 관리할 수 있습니다.'
      })
    )

    // NOTE 테이블 헤더 정의
    dispatch(
      setTableHeader([
        '프로필',
        '아이디',
        '계정',
        '소개',
        '비밀번호',
        '사용자명',
        '권한',
        '생성일자',
        '수정일자',
        '액션'
      ])
    )

    // NOTE 추가 폼 설정
    dispatch(
      setAddForm([
        {
          type: 'text',
          label: '계정',
          key: 'account',
          value: ''
        },
        {
          type: 'password',
          label: '비밀번호',
          key: 'password',
          value: ''
        },
        {
          type: 'password',
          label: '비밀번호 확인',
          key: 'confirmPassword',
          value: ''
        },
        {
          type: 'text',
          label: '사용자명',
          key: 'username',
          value: ''
        },
        {
          type: 'upload',
          label: '이미지',
          key: 'profile',
          value: [],
          allowFileExt: ['.png', '.jpg', '.jpeg', '.gif'],
          maxFileCount: 1,
          maxFileSizeBytes: 1024 * 1024 * 4
        },
        {
          type: 'editor',
          label: '에디터',
          key: 'intro',
          value: ''
        },
        {
          type: 'select',
          label: '권한',
          key: 'role',
          value: '',
          list: [
            {
              label: '시스템 관리자',
              value: 'SA'
            },
            {
              label: '관리자',
              value: 'A'
            },
            {
              label: '사용자',
              value: 'U'
            }
          ]
        }
      ])
    )

    // NOTE 상세 폼 설정
    dispatch(
      setDetailForm([
        {
          label: '아이디',
          key: 'id',
          value: ''
        },
        {
          label: '계정',
          key: 'account',
          value: ''
        },
        {
          label: '비밀번호',
          key: 'password',
          value: ''
        },
        {
          label: '사용자명',
          key: 'username',
          value: ''
        },
        {
          label: '시스템관리자',
          key: 'isSystemAdmin',
          value: ''
        },
        {
          label: '관리자',
          key: 'isAdmin',
          value: ''
        },
        {
          label: '생성일자',
          key: 'createdAt',
          value: ''
        },
        {
          label: '수정일자',
          key: 'updatedAt',
          value: ''
        },
        {
          label: '삭제일자',
          key: 'deletedAt',
          value: ''
        }
      ])
    )

    // NOTE 검색 폼 설정
    dispatch(
      setSearchForm([
        {
          type: 'text',
          label: '계정',
          key: 'account',
          value: ''
        },
        {
          type: 'select',
          label: '권한',
          key: 'role',
          value: '',
          list: [
            {
              label: '시스템관리자',
              value: 'SA'
            },
            {
              label: '관리자',
              value: 'A'
            },
            {
              label: '사용자',
              value: 'U'
            }
          ]
        },
        {
          type: 'date',
          label: '생성일자',
          key: 'createdAt',
          value: ''
        }
      ])
    )

    // NOTE 액션 정의
    dispatch(
      setActionList([
        {
          icon: 'bx:user-circle',
          label: '프로필 변경',
          content: [
            {
              type: 'upload',
              label: '변경할 이미지',
              key: 'profile',
              value: [],
              allowFileExt: ['.png', '.jpg', '.jpeg', '.gif'],
              maxFileCount: 1,
              maxFileSizeBytes: 1024 * 1024 * 4
            }
          ],
          loadAPI: getUserDetail,
          updateAPI: updateUserProfile
        },
        {
          icon: 'bx:user-circle',
          label: '자기소개 변경',
          content: [
            {
              type: 'editor',
              label: '변경할 자기소개',
              key: 'intro',
              value: ''
            }
          ],
          loadAPI: getUserDetail,
          updateAPI: updateUserIntro
        },
        {
          icon: 'bx:pencil',
          label: '비밀번호 변경',
          content: [
            {
              type: 'password',
              label: '기존 비밀번호',
              key: 'oldPassword',
              value: ''
            },
            {
              type: 'password',
              label: '새로운 비밀번호',
              key: 'newPassword',
              value: ''
            },
            {
              type: 'password',
              label: '새로운 비밀번호 확인',
              key: 'confirmNewPassword',
              value: ''
            }
          ],
          loadAPI: null,
          updateAPI: updateUserPassword
        },
        {
          icon: 'bx:pencil',
          label: '사용자명 변경',
          content: [
            {
              type: 'text',
              label: '사용자명',
              key: 'username',
              value: ''
            }
          ],
          loadAPI: getUserDetail,
          updateAPI: updateUserUsername
        },
        {
          icon: 'bx:pencil',
          label: '권한 변경',
          content: [
            {
              type: 'select',
              label: '권한',
              key: 'role',
              value: '',
              list: [
                {
                  label: '시스템 관리자',
                  value: 'SA'
                },
                {
                  label: '관리자',
                  value: 'A'
                },
                {
                  label: '사용자',
                  value: 'U'
                }
              ]
            }
          ],
          loadAPI: getUserDetail,
          updateAPI: updateUserRole
        }
      ])
    )

    dispatch(initData())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {/* 헤더 컨테이너 */}
      <HeaderContainer />

      {/* 추가 컨테이너 */}
      <AddContainer />

      {/* 검색 컨테이너 */}
      <SearchContainer />

      {/* 리스트 컨테이너 */}
      <ListContainer>
        <Content />
      </ListContainer>
    </>
  )
}

export default Admin
