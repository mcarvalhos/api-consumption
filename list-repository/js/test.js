(function () {
  const search = document.getElementById("search");
  const url = `https://api.github.com/orgs`;
  const uri = `/repos`;
  const client_id = "client_id=6e91aa9f24ed706ed387";
  const client_secret = "client_id=6082a0dc9c3c2dbce38fceed861dfa69745aafca";
  const count = "per_page=20";
  const sort = "created: asc";

  async function getUser(user) {
    // const profileResponse = await fetch(
    //   `${url}/${user}?${client_id}&${client_secret}`
    // );

    // const reposResponse = await fetch(
    //   `${url}/${user}${uri}?${count}&${sort}&${client_id}&${client_secret}`
    // );

    // const profile = await profileResponse.json();
    // const repos = await reposResponse.json();

    const profile =
      // 20210126190102
      // https://api.github.com/orgs/microsoft/repos

      [
        {
          id: 1932083,
          node_id: "MDEwOlJlcG9zaXRvcnkxOTMyMDgz",
          name: "HealthVault-Mobile-iOS-Library",
          full_name: "microsoft/HealthVault-Mobile-iOS-Library",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url:
            "https://github.com/microsoft/HealthVault-Mobile-iOS-Library",
          description:
            "The HealthVault team has recently added the capability to write applications that will run on Mobile Devices and connect directly to the HealthVault Service. HealthVault iOS library enables developers to write iOS applications which interact with a user's personally controlled health record. The “go live” process to deploy an application against the production HealthVault service can be found at http://msdn.microsoft.com/en-us/healthvault/bb962148. Information about the API that the HealthVault service exposes can be in the documentation in HealthVault .NET SDK.",
          fork: false,
          url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library",
          forks_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/deployments",
          created_at: "2011-06-21T22:49:39Z",
          updated_at: "2021-01-13T20:31:15Z",
          pushed_at: "2017-04-28T17:05:02Z",
          git_url:
            "git://github.com/microsoft/HealthVault-Mobile-iOS-Library.git",
          ssh_url:
            "git@github.com:microsoft/HealthVault-Mobile-iOS-Library.git",
          clone_url:
            "https://github.com/microsoft/HealthVault-Mobile-iOS-Library.git",
          svn_url:
            "https://github.com/microsoft/HealthVault-Mobile-iOS-Library",
          homepage: "http://msdn.com/healthvault",
          size: 798,
          stargazers_count: 41,
          watchers_count: 41,
          language: "Objective-C",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 20,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 2,
          license: null,
          forks: 20,
          open_issues: 2,
          watchers: 41,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 3085152,
          node_id: "MDEwOlJlcG9zaXRvcnkzMDg1MTUy",
          name: "BeanSpy",
          full_name: "microsoft/BeanSpy",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/BeanSpy",
          description:
            "BeanSpy is an open source Java servlet technology provided by Microsoft to retrieve JMX information from Java EE application servers",
          fork: false,
          url: "https://api.github.com/repos/microsoft/BeanSpy",
          forks_url: "https://api.github.com/repos/microsoft/BeanSpy/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/BeanSpy/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/BeanSpy/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/BeanSpy/teams",
          hooks_url: "https://api.github.com/repos/microsoft/BeanSpy/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/BeanSpy/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/BeanSpy/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/BeanSpy/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/BeanSpy/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/BeanSpy/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/BeanSpy/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/BeanSpy/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/BeanSpy/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/BeanSpy/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/BeanSpy/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/BeanSpy/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/BeanSpy/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/BeanSpy/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/BeanSpy/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/BeanSpy/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/BeanSpy/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/BeanSpy/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/BeanSpy/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/BeanSpy/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/BeanSpy/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/BeanSpy/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/BeanSpy/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/BeanSpy/deployments",
          created_at: "2012-01-02T02:03:37Z",
          updated_at: "2020-05-04T09:55:34Z",
          pushed_at: "2018-10-15T18:13:18Z",
          git_url: "git://github.com/microsoft/BeanSpy.git",
          ssh_url: "git@github.com:microsoft/BeanSpy.git",
          clone_url: "https://github.com/microsoft/BeanSpy.git",
          svn_url: "https://github.com/microsoft/BeanSpy",
          homepage: "",
          size: 325,
          stargazers_count: 20,
          watchers_count: 20,
          language: "Java",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 17,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 5,
          license: {
            key: "apache-2.0",
            name: "Apache License 2.0",
            spdx_id: "Apache-2.0",
            url: "https://api.github.com/licenses/apache-2.0",
            node_id: "MDc6TGljZW5zZTI=",
          },
          forks: 17,
          open_issues: 5,
          watchers: 20,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 4047810,
          node_id: "MDEwOlJlcG9zaXRvcnk0MDQ3ODEw",
          name: "healthvault-ios-sdk",
          full_name: "microsoft/healthvault-ios-sdk",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/healthvault-ios-sdk",
          description:
            "This library is used for the HealthVault for iPhone app. Ongoing updates & bug fixes",
          fork: false,
          url: "https://api.github.com/repos/microsoft/healthvault-ios-sdk",
          forks_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/deployments",
          created_at: "2012-04-17T01:33:37Z",
          updated_at: "2021-01-13T20:30:03Z",
          pushed_at: "2017-10-10T17:03:00Z",
          git_url: "git://github.com/microsoft/healthvault-ios-sdk.git",
          ssh_url: "git@github.com:microsoft/healthvault-ios-sdk.git",
          clone_url: "https://github.com/microsoft/healthvault-ios-sdk.git",
          svn_url: "https://github.com/microsoft/healthvault-ios-sdk",
          homepage: "",
          size: 10007,
          stargazers_count: 28,
          watchers_count: 28,
          language: "C",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 15,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 2,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 15,
          open_issues: 2,
          watchers: 28,
          default_branch: "microsoft/develop",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 5590199,
          node_id: "MDEwOlJlcG9zaXRvcnk1NTkwMTk5",
          name: "WindowsAzureToolkitForEclipseWithJava",
          full_name: "microsoft/WindowsAzureToolkitForEclipseWithJava",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url:
            "https://github.com/microsoft/WindowsAzureToolkitForEclipseWithJava",
          description: "Windows Azure Toolkit for Eclipse with Java",
          fork: false,
          url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava",
          forks_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/deployments",
          created_at: "2012-08-28T18:33:11Z",
          updated_at: "2021-01-26T19:00:22Z",
          pushed_at: "2016-03-15T20:13:51Z",
          git_url:
            "git://github.com/microsoft/WindowsAzureToolkitForEclipseWithJava.git",
          ssh_url:
            "git@github.com:microsoft/WindowsAzureToolkitForEclipseWithJava.git",
          clone_url:
            "https://github.com/microsoft/WindowsAzureToolkitForEclipseWithJava.git",
          svn_url:
            "https://github.com/microsoft/WindowsAzureToolkitForEclipseWithJava",
          homepage: null,
          size: 82855,
          stargazers_count: 41,
          watchers_count: 41,
          language: "Java",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 40,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 2,
          license: null,
          forks: 40,
          open_issues: 2,
          watchers: 41,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 10075507,
          node_id: "MDEwOlJlcG9zaXRvcnkxMDA3NTUwNw==",
          name: "php-sdk-binary-tools",
          full_name: "microsoft/php-sdk-binary-tools",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/php-sdk-binary-tools",
          description: "Tool kit for building PHP under Windows",
          fork: false,
          url: "https://api.github.com/repos/microsoft/php-sdk-binary-tools",
          forks_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/deployments",
          created_at: "2013-05-15T09:42:29Z",
          updated_at: "2021-01-24T21:01:46Z",
          pushed_at: "2020-08-03T08:23:44Z",
          git_url: "git://github.com/microsoft/php-sdk-binary-tools.git",
          ssh_url: "git@github.com:microsoft/php-sdk-binary-tools.git",
          clone_url: "https://github.com/microsoft/php-sdk-binary-tools.git",
          svn_url: "https://github.com/microsoft/php-sdk-binary-tools",
          homepage: "",
          size: 116034,
          stargazers_count: 202,
          watchers_count: 202,
          language: "M4",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 61,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 3,
          license: {
            key: "bsd-2-clause",
            name: 'BSD 2-Clause "Simplified" License',
            spdx_id: "BSD-2-Clause",
            url: "https://api.github.com/licenses/bsd-2-clause",
            node_id: "MDc6TGljZW5zZTQ=",
          },
          forks: 61,
          open_issues: 3,
          watchers: 202,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11571442,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTU3MTQ0Mg==",
          name: "plcrashreporter",
          full_name: "microsoft/plcrashreporter",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/plcrashreporter",
          description:
            "Reliable, open-source crash reporting for iOS, macOS and tvOS",
          fork: false,
          url: "https://api.github.com/repos/microsoft/plcrashreporter",
          forks_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/deployments",
          created_at: "2013-07-22T02:38:00Z",
          updated_at: "2021-01-26T12:28:06Z",
          pushed_at: "2021-01-15T14:28:07Z",
          git_url: "git://github.com/microsoft/plcrashreporter.git",
          ssh_url: "git@github.com:microsoft/plcrashreporter.git",
          clone_url: "https://github.com/microsoft/plcrashreporter.git",
          svn_url: "https://github.com/microsoft/plcrashreporter",
          homepage: "",
          size: 23483,
          stargazers_count: 1963,
          watchers_count: 1963,
          language: "Objective-C",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 398,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 8,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 398,
          open_issues: 8,
          watchers: 1963,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11635549,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTYzNTU0OQ==",
          name: "filter-explorer",
          full_name: "microsoft/filter-explorer",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/filter-explorer",
          description:
            "Filter Explorer is an example application which demonstrates some of the image editing capabilities and performance of the Imaging SDK by allowing the user to apply a number of filter layers to existing or newly captured photos.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/filter-explorer",
          forks_url:
            "https://api.github.com/repos/microsoft/filter-explorer/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/filter-explorer/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/filter-explorer/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/filter-explorer/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/filter-explorer/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/filter-explorer/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/filter-explorer/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/filter-explorer/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/filter-explorer/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/filter-explorer/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/filter-explorer/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/filter-explorer/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/filter-explorer/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/filter-explorer/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/filter-explorer/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/filter-explorer/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/filter-explorer/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/filter-explorer/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/filter-explorer/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/filter-explorer/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/filter-explorer/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/filter-explorer/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/filter-explorer/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/filter-explorer/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/filter-explorer/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/filter-explorer/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/filter-explorer/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/filter-explorer/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/filter-explorer/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/filter-explorer/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/filter-explorer/deployments",
          created_at: "2013-07-24T13:36:42Z",
          updated_at: "2020-11-20T21:33:02Z",
          pushed_at: "2015-04-29T07:57:07Z",
          git_url: "git://github.com/microsoft/filter-explorer.git",
          ssh_url: "git@github.com:microsoft/filter-explorer.git",
          clone_url: "https://github.com/microsoft/filter-explorer.git",
          svn_url: "https://github.com/microsoft/filter-explorer",
          homepage: "",
          size: 53467,
          stargazers_count: 26,
          watchers_count: 26,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 19,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 3,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 19,
          open_issues: 3,
          watchers: 26,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11734841,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNDg0MQ==",
          name: "filter-effects",
          full_name: "microsoft/filter-effects",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/filter-effects",
          description:
            "An example application demonstrating the use of the different filters of Imaging SDK with camera photos. This example app uses the camera and displays the viewfinder for taking a picture. The taken photo is then processed with the predefined filters. The filter properties can be manipulated and the changes can be seen in the preview image immediately. The processed image can be saved in JPEG format to the device. You can also select an existing photo and apply an effect to it.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/filter-effects",
          forks_url:
            "https://api.github.com/repos/microsoft/filter-effects/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/filter-effects/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/filter-effects/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/filter-effects/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/filter-effects/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/filter-effects/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/filter-effects/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/filter-effects/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/filter-effects/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/filter-effects/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/filter-effects/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/filter-effects/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/filter-effects/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/filter-effects/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/filter-effects/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/filter-effects/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/filter-effects/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/filter-effects/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/filter-effects/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/filter-effects/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/filter-effects/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/filter-effects/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/filter-effects/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/filter-effects/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/filter-effects/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/filter-effects/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/filter-effects/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/filter-effects/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/filter-effects/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/filter-effects/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/filter-effects/deployments",
          created_at: "2013-07-29T08:30:45Z",
          updated_at: "2020-05-09T09:37:49Z",
          pushed_at: "2015-04-29T07:57:08Z",
          git_url: "git://github.com/microsoft/filter-effects.git",
          ssh_url: "git@github.com:microsoft/filter-effects.git",
          clone_url: "https://github.com/microsoft/filter-effects.git",
          svn_url: "https://github.com/microsoft/filter-effects",
          homepage:
            "http://developer.nokia.com/resources/library/Lumia/nokia-imaging-sdk/sample-projects/filter-effects.html",
          size: 19687,
          stargazers_count: 30,
          watchers_count: 30,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 21,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 4,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 21,
          open_issues: 4,
          watchers: 30,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11734950,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNDk1MA==",
          name: "real-time-filter-demo",
          full_name: "microsoft/real-time-filter-demo",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/real-time-filter-demo",
          description:
            "An example application demonstrating the use of the Imaging SDK for real-time image effects. The effects are applied to the stream received from the camera and shown in the viewfinder. This app does not support capturing photos.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/real-time-filter-demo",
          forks_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/deployments",
          created_at: "2013-07-29T08:36:12Z",
          updated_at: "2020-12-23T06:46:13Z",
          pushed_at: "2015-04-29T07:57:25Z",
          git_url: "git://github.com/microsoft/real-time-filter-demo.git",
          ssh_url: "git@github.com:microsoft/real-time-filter-demo.git",
          clone_url: "https://github.com/microsoft/real-time-filter-demo.git",
          svn_url: "https://github.com/microsoft/real-time-filter-demo",
          homepage: "",
          size: 23481,
          stargazers_count: 31,
          watchers_count: 31,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 24,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "mit",
            name: "MIT License",
            spdx_id: "MIT",
            url: "https://api.github.com/licenses/mit",
            node_id: "MDc6TGljZW5zZTEz",
          },
          forks: 24,
          open_issues: 1,
          watchers: 31,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735149,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTE0OQ==",
          name: "photo-inspector",
          full_name: "microsoft/photo-inspector",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/photo-inspector",
          description:
            "Photo Inspector is an example application on how to capture and process high resolution photos (resolution depends on device hardware).",
          fork: false,
          url: "https://api.github.com/repos/microsoft/photo-inspector",
          forks_url:
            "https://api.github.com/repos/microsoft/photo-inspector/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/photo-inspector/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/photo-inspector/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/photo-inspector/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/photo-inspector/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/photo-inspector/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/photo-inspector/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/photo-inspector/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/photo-inspector/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/photo-inspector/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/photo-inspector/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/photo-inspector/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/photo-inspector/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/photo-inspector/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/photo-inspector/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/photo-inspector/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/photo-inspector/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/photo-inspector/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/photo-inspector/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/photo-inspector/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/photo-inspector/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/photo-inspector/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/photo-inspector/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/photo-inspector/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/photo-inspector/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/photo-inspector/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/photo-inspector/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/photo-inspector/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/photo-inspector/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/photo-inspector/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/photo-inspector/deployments",
          created_at: "2013-07-29T08:47:31Z",
          updated_at: "2020-11-20T21:32:34Z",
          pushed_at: "2014-11-28T13:31:47Z",
          git_url: "git://github.com/microsoft/photo-inspector.git",
          ssh_url: "git@github.com:microsoft/photo-inspector.git",
          clone_url: "https://github.com/microsoft/photo-inspector.git",
          svn_url: "https://github.com/microsoft/photo-inspector",
          homepage: null,
          size: 22391,
          stargazers_count: 25,
          watchers_count: 25,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 18,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 18,
          open_issues: 1,
          watchers: 25,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735223,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTIyMw==",
          name: "camera-explorer",
          full_name: "microsoft/camera-explorer",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/camera-explorer",
          description:
            "Camera Explorer application for Windows Phone 8 demonstrates the use of the new advanced Windows Phone 8 camera API, the Windows.Phone.Media.Capture.PhotoCaptureDevice and the related classes and enumerations on Lumia devices.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/camera-explorer",
          forks_url:
            "https://api.github.com/repos/microsoft/camera-explorer/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/camera-explorer/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/camera-explorer/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/camera-explorer/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/camera-explorer/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/camera-explorer/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/camera-explorer/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/camera-explorer/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/camera-explorer/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/camera-explorer/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/camera-explorer/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/camera-explorer/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/camera-explorer/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/camera-explorer/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/camera-explorer/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/camera-explorer/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/camera-explorer/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/camera-explorer/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/camera-explorer/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/camera-explorer/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/camera-explorer/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/camera-explorer/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/camera-explorer/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/camera-explorer/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/camera-explorer/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/camera-explorer/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/camera-explorer/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/camera-explorer/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/camera-explorer/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/camera-explorer/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/camera-explorer/deployments",
          created_at: "2013-07-29T08:51:40Z",
          updated_at: "2020-05-05T09:34:44Z",
          pushed_at: "2014-11-28T12:04:47Z",
          git_url: "git://github.com/microsoft/camera-explorer.git",
          ssh_url: "git@github.com:microsoft/camera-explorer.git",
          clone_url: "https://github.com/microsoft/camera-explorer.git",
          svn_url: "https://github.com/microsoft/camera-explorer",
          homepage: "",
          size: 10398,
          stargazers_count: 18,
          watchers_count: 18,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 21,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 21,
          open_issues: 1,
          watchers: 18,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735455,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTQ1NQ==",
          name: "map-explorer",
          full_name: "microsoft/map-explorer",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/map-explorer",
          description:
            "Map Explorer is an example application demonstrating how to use the new Windows Phone 8 Maps API replacing the Bing Maps used in Windows Phone 7.x.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/map-explorer",
          forks_url:
            "https://api.github.com/repos/microsoft/map-explorer/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/map-explorer/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/map-explorer/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/map-explorer/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/map-explorer/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/map-explorer/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/map-explorer/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/map-explorer/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/map-explorer/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/map-explorer/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/map-explorer/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/map-explorer/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/map-explorer/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/map-explorer/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/map-explorer/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/map-explorer/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/map-explorer/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/map-explorer/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/map-explorer/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/map-explorer/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/map-explorer/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/map-explorer/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/map-explorer/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/map-explorer/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/map-explorer/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/map-explorer/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/map-explorer/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/map-explorer/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/map-explorer/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/map-explorer/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/map-explorer/deployments",
          created_at: "2013-07-29T09:02:19Z",
          updated_at: "2020-09-22T00:09:05Z",
          pushed_at: "2014-11-28T12:36:56Z",
          git_url: "git://github.com/microsoft/map-explorer.git",
          ssh_url: "git@github.com:microsoft/map-explorer.git",
          clone_url: "https://github.com/microsoft/map-explorer.git",
          svn_url: "https://github.com/microsoft/map-explorer",
          homepage: "",
          size: 6341,
          stargazers_count: 23,
          watchers_count: 23,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 20,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 20,
          open_issues: 0,
          watchers: 23,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735508,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTUwOA==",
          name: "music-explorer",
          full_name: "microsoft/music-explorer",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/music-explorer",
          description:
            "Music Explorer is an example application demonstrating the use of Nokia Music API together with standard Windows Phone 8 audio features to create an immersive music experience.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/music-explorer",
          forks_url:
            "https://api.github.com/repos/microsoft/music-explorer/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/music-explorer/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/music-explorer/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/music-explorer/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/music-explorer/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/music-explorer/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/music-explorer/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/music-explorer/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/music-explorer/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/music-explorer/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/music-explorer/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/music-explorer/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/music-explorer/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/music-explorer/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/music-explorer/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/music-explorer/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/music-explorer/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/music-explorer/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/music-explorer/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/music-explorer/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/music-explorer/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/music-explorer/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/music-explorer/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/music-explorer/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/music-explorer/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/music-explorer/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/music-explorer/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/music-explorer/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/music-explorer/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/music-explorer/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/music-explorer/deployments",
          created_at: "2013-07-29T09:05:41Z",
          updated_at: "2020-12-01T08:17:40Z",
          pushed_at: "2018-10-03T00:14:19Z",
          git_url: "git://github.com/microsoft/music-explorer.git",
          ssh_url: "git@github.com:microsoft/music-explorer.git",
          clone_url: "https://github.com/microsoft/music-explorer.git",
          svn_url: "https://github.com/microsoft/music-explorer",
          homepage: "",
          size: 15066,
          stargazers_count: 25,
          watchers_count: 25,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 23,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 23,
          open_issues: 1,
          watchers: 25,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735785,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTc4NQ==",
          name: "here-launchers",
          full_name: "microsoft/here-launchers",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/here-launchers",
          description:
            "HERE Launchers API library and source codes, as well the demo application illustrating the use of the API.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/here-launchers",
          forks_url:
            "https://api.github.com/repos/microsoft/here-launchers/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/here-launchers/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/here-launchers/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/here-launchers/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/here-launchers/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/here-launchers/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/here-launchers/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/here-launchers/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/here-launchers/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/here-launchers/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/here-launchers/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/here-launchers/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/here-launchers/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/here-launchers/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/here-launchers/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/here-launchers/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/here-launchers/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/here-launchers/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/here-launchers/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/here-launchers/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/here-launchers/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/here-launchers/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/here-launchers/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/here-launchers/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/here-launchers/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/here-launchers/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/here-launchers/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/here-launchers/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/here-launchers/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/here-launchers/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/here-launchers/deployments",
          created_at: "2013-07-29T09:19:59Z",
          updated_at: "2020-05-11T18:48:52Z",
          pushed_at: "2014-12-04T07:42:35Z",
          git_url: "git://github.com/microsoft/here-launchers.git",
          ssh_url: "git@github.com:microsoft/here-launchers.git",
          clone_url: "https://github.com/microsoft/here-launchers.git",
          svn_url: "https://github.com/microsoft/here-launchers",
          homepage: null,
          size: 2224,
          stargazers_count: 22,
          watchers_count: 22,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 25,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: null,
          forks: 25,
          open_issues: 1,
          watchers: 22,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12737157,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjczNzE1Nw==",
          name: "azure-puppet",
          full_name: "microsoft/azure-puppet",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/azure-puppet",
          description: null,
          fork: false,
          url: "https://api.github.com/repos/microsoft/azure-puppet",
          forks_url:
            "https://api.github.com/repos/microsoft/azure-puppet/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/azure-puppet/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/azure-puppet/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/azure-puppet/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/azure-puppet/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/azure-puppet/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/azure-puppet/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/azure-puppet/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/azure-puppet/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/azure-puppet/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/azure-puppet/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/azure-puppet/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/azure-puppet/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/azure-puppet/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/azure-puppet/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/azure-puppet/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/azure-puppet/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/azure-puppet/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/azure-puppet/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/azure-puppet/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/azure-puppet/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/azure-puppet/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/azure-puppet/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/azure-puppet/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/azure-puppet/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/azure-puppet/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/azure-puppet/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/azure-puppet/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/azure-puppet/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/azure-puppet/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/azure-puppet/deployments",
          created_at: "2013-09-10T18:26:20Z",
          updated_at: "2021-01-26T18:44:28Z",
          pushed_at: "2018-10-06T08:41:15Z",
          git_url: "git://github.com/microsoft/azure-puppet.git",
          ssh_url: "git@github.com:microsoft/azure-puppet.git",
          clone_url: "https://github.com/microsoft/azure-puppet.git",
          svn_url: "https://github.com/microsoft/azure-puppet",
          homepage: null,
          size: 833,
          stargazers_count: 19,
          watchers_count: 19,
          language: "Ruby",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 24,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 17,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 24,
          open_issues: 17,
          watchers: 19,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914921,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDkyMQ==",
          name: "weekly-planner-wp",
          full_name: "microsoft/weekly-planner-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/weekly-planner-wp",
          description:
            "Weekly Planner is an example application for planning weekly schedule e.g. for students and school kids. The application demonstrates usage of pivot control, custom tabular UI component, content editing and storing local data.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/weekly-planner-wp",
          forks_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/deployments",
          created_at: "2013-09-18T05:33:21Z",
          updated_at: "2020-05-10T08:09:04Z",
          pushed_at: "2014-11-12T13:18:56Z",
          git_url: "git://github.com/microsoft/weekly-planner-wp.git",
          ssh_url: "git@github.com:microsoft/weekly-planner-wp.git",
          clone_url: "https://github.com/microsoft/weekly-planner-wp.git",
          svn_url: "https://github.com/microsoft/weekly-planner-wp",
          homepage: "",
          size: 3134,
          stargazers_count: 20,
          watchers_count: 20,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 13,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 13,
          open_issues: 0,
          watchers: 20,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914933,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDkzMw==",
          name: "drumkitx",
          full_name: "microsoft/drumkitx",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/drumkitx",
          description:
            "A Windows Phone 8 port of the ​Drumkit XNA example using Direct3D and XAudio for fast graphics and low latency sample playback. This demo app lets you play percussion sounds by tapping the screen. You can record your beats, play them back later and also play drums on top of your latest recording.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/drumkitx",
          forks_url: "https://api.github.com/repos/microsoft/drumkitx/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/drumkitx/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/drumkitx/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/drumkitx/teams",
          hooks_url: "https://api.github.com/repos/microsoft/drumkitx/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/drumkitx/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/drumkitx/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/drumkitx/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/drumkitx/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/drumkitx/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/drumkitx/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/drumkitx/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/drumkitx/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/drumkitx/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/drumkitx/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/drumkitx/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/drumkitx/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/drumkitx/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/drumkitx/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/drumkitx/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/drumkitx/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/drumkitx/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/drumkitx/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/drumkitx/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/drumkitx/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/drumkitx/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/drumkitx/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/drumkitx/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/drumkitx/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/drumkitx/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/drumkitx/deployments",
          created_at: "2013-09-18T05:34:17Z",
          updated_at: "2020-09-10T02:46:07Z",
          pushed_at: "2014-11-28T12:14:50Z",
          git_url: "git://github.com/microsoft/drumkitx.git",
          ssh_url: "git@github.com:microsoft/drumkitx.git",
          clone_url: "https://github.com/microsoft/drumkitx.git",
          svn_url: "https://github.com/microsoft/drumkitx",
          homepage: null,
          size: 8335,
          stargazers_count: 18,
          watchers_count: 18,
          language: "C++",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 13,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 13,
          open_issues: 0,
          watchers: 18,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914939,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDkzOQ==",
          name: "diner-wp",
          full_name: "microsoft/diner-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/diner-wp",
          description:
            "The Diner example application demonstrates how to build simple, catalog-type application, for Windows Phone based on local XML data. It is straightforward to convert the application to use internet resources instead of local XML-resources. The application is designed in such a way that it is easy to replace the content and visual style for different restaurants.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/diner-wp",
          forks_url: "https://api.github.com/repos/microsoft/diner-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/diner-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/diner-wp/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/diner-wp/teams",
          hooks_url: "https://api.github.com/repos/microsoft/diner-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/diner-wp/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/diner-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/diner-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/diner-wp/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/diner-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/diner-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/diner-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/diner-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/diner-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/diner-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/diner-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/diner-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/diner-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/diner-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/diner-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/diner-wp/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/diner-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/diner-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/diner-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/diner-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/diner-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/diner-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/diner-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/diner-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/diner-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/diner-wp/deployments",
          created_at: "2013-09-18T05:34:41Z",
          updated_at: "2020-05-09T09:00:56Z",
          pushed_at: "2014-11-07T11:48:37Z",
          git_url: "git://github.com/microsoft/diner-wp.git",
          ssh_url: "git@github.com:microsoft/diner-wp.git",
          clone_url: "https://github.com/microsoft/diner-wp.git",
          svn_url: "https://github.com/microsoft/diner-wp",
          homepage: null,
          size: 9073,
          stargazers_count: 14,
          watchers_count: 14,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 13,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 13,
          open_issues: 0,
          watchers: 14,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914958,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDk1OA==",
          name: "rss-reader-wp",
          full_name: "microsoft/rss-reader-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/rss-reader-wp",
          description:
            "The RSS Reader Example Application demonstrates the use of RSS feed resources from the Internet, and concepts such as tombstoning and dynamically generating and modifying the user interface on the fly. It contains a rich UI with view navigation, search, lists and animations.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/rss-reader-wp",
          forks_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/rss-reader-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/deployments",
          created_at: "2013-09-18T05:35:45Z",
          updated_at: "2020-10-07T15:05:27Z",
          pushed_at: "2015-08-27T02:47:22Z",
          git_url: "git://github.com/microsoft/rss-reader-wp.git",
          ssh_url: "git@github.com:microsoft/rss-reader-wp.git",
          clone_url: "https://github.com/microsoft/rss-reader-wp.git",
          svn_url: "https://github.com/microsoft/rss-reader-wp",
          homepage: null,
          size: 1826,
          stargazers_count: 34,
          watchers_count: 34,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 26,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 26,
          open_issues: 0,
          watchers: 34,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914974,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDk3NA==",
          name: "audio-recorder",
          full_name: "microsoft/audio-recorder",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/audio-recorder",
          description:
            "Audio Recorder is an example application demonstrating how to record and play audio in Windows Phone 8 devices. XNA Audio API and Windows Audio Session API (WASAPI) are covered by the example.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/audio-recorder",
          forks_url:
            "https://api.github.com/repos/microsoft/audio-recorder/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/audio-recorder/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/audio-recorder/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/audio-recorder/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/audio-recorder/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/audio-recorder/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/audio-recorder/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/audio-recorder/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/audio-recorder/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/audio-recorder/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/audio-recorder/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/audio-recorder/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/audio-recorder/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/audio-recorder/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/audio-recorder/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/audio-recorder/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/audio-recorder/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/audio-recorder/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/audio-recorder/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/audio-recorder/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/audio-recorder/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/audio-recorder/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/audio-recorder/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/audio-recorder/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/audio-recorder/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/audio-recorder/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/audio-recorder/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/audio-recorder/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/audio-recorder/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/audio-recorder/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/audio-recorder/deployments",
          created_at: "2013-09-18T05:36:41Z",
          updated_at: "2020-11-30T07:53:54Z",
          pushed_at: "2014-11-28T13:36:27Z",
          git_url: "git://github.com/microsoft/audio-recorder.git",
          ssh_url: "git@github.com:microsoft/audio-recorder.git",
          clone_url: "https://github.com/microsoft/audio-recorder.git",
          svn_url: "https://github.com/microsoft/audio-recorder",
          homepage: "",
          size: 2662,
          stargazers_count: 38,
          watchers_count: 38,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 24,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 3,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 24,
          open_issues: 3,
          watchers: 38,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12937619,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkzNzYxOQ==",
          name: "cocos2d-x",
          full_name: "microsoft/cocos2d-x",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/cocos2d-x",
          description:
            "cocos2d for iOS, Android, Win32 and OS X. Built using C++",
          fork: true,
          url: "https://api.github.com/repos/microsoft/cocos2d-x",
          forks_url: "https://api.github.com/repos/microsoft/cocos2d-x/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/cocos2d-x/teams",
          hooks_url: "https://api.github.com/repos/microsoft/cocos2d-x/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/cocos2d-x/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/cocos2d-x/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/cocos2d-x/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/deployments",
          created_at: "2013-09-19T00:22:15Z",
          updated_at: "2021-01-26T18:46:12Z",
          pushed_at: "2017-07-17T19:12:47Z",
          git_url: "git://github.com/microsoft/cocos2d-x.git",
          ssh_url: "git@github.com:microsoft/cocos2d-x.git",
          clone_url: "https://github.com/microsoft/cocos2d-x.git",
          svn_url: "https://github.com/microsoft/cocos2d-x",
          homepage: "http://www.cocos2d-x.org",
          size: 916240,
          stargazers_count: 84,
          watchers_count: 84,
          language: "C++",
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: true,
          forks_count: 43,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 26,
          license: null,
          forks: 43,
          open_issues: 26,
          watchers: 84,
          default_branch: "v3",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13414312,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzQxNDMxMg==",
          name: "dynamic-layout-sample",
          full_name: "microsoft/dynamic-layout-sample",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/dynamic-layout-sample",
          description:
            "An example application demonstrating how to create a dynamic layouts for different size of resolutions and physical screens on Windows Phone 8 platform.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/dynamic-layout-sample",
          forks_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/deployments",
          created_at: "2013-10-08T13:34:39Z",
          updated_at: "2020-05-09T09:10:19Z",
          pushed_at: "2014-11-27T12:04:49Z",
          git_url: "git://github.com/microsoft/dynamic-layout-sample.git",
          ssh_url: "git@github.com:microsoft/dynamic-layout-sample.git",
          clone_url: "https://github.com/microsoft/dynamic-layout-sample.git",
          svn_url: "https://github.com/microsoft/dynamic-layout-sample",
          homepage: "",
          size: 254,
          stargazers_count: 13,
          watchers_count: 13,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 15,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 15,
          open_issues: 0,
          watchers: 13,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13735970,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzczNTk3MA==",
          name: "nfc-ndef-tag-reader",
          full_name: "microsoft/nfc-ndef-tag-reader",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/nfc-ndef-tag-reader",
          description:
            "A simple NFC tag reader application for Windows Phone 8. This example app demonstrates how to use the Proximity API to read NFC Data Exchange Format (NDEF) compliant tags.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader",
          forks_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/deployments",
          created_at: "2013-10-21T07:48:10Z",
          updated_at: "2020-05-09T11:36:34Z",
          pushed_at: "2014-11-28T13:24:28Z",
          git_url: "git://github.com/microsoft/nfc-ndef-tag-reader.git",
          ssh_url: "git@github.com:microsoft/nfc-ndef-tag-reader.git",
          clone_url: "https://github.com/microsoft/nfc-ndef-tag-reader.git",
          svn_url: "https://github.com/microsoft/nfc-ndef-tag-reader",
          homepage: "",
          size: 932,
          stargazers_count: 29,
          watchers_count: 29,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 19,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 19,
          open_issues: 0,
          watchers: 29,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13736643,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzczNjY0Mw==",
          name: "nfc-talk",
          full_name: "microsoft/nfc-talk",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/nfc-talk",
          description:
            "Simple chat application demonstrating NFC tap and Bluetooth search initiated connection establishment and further data transfer.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/nfc-talk",
          forks_url: "https://api.github.com/repos/microsoft/nfc-talk/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/nfc-talk/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/nfc-talk/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/nfc-talk/teams",
          hooks_url: "https://api.github.com/repos/microsoft/nfc-talk/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/nfc-talk/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/nfc-talk/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/nfc-talk/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/nfc-talk/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/nfc-talk/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/nfc-talk/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/nfc-talk/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/nfc-talk/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/nfc-talk/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/nfc-talk/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/nfc-talk/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/nfc-talk/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/nfc-talk/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/nfc-talk/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/nfc-talk/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/nfc-talk/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/nfc-talk/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/nfc-talk/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/nfc-talk/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/nfc-talk/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/nfc-talk/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/nfc-talk/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/nfc-talk/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/nfc-talk/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/nfc-talk/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/nfc-talk/deployments",
          created_at: "2013-10-21T08:24:18Z",
          updated_at: "2020-11-20T21:32:56Z",
          pushed_at: "2018-10-31T17:23:31Z",
          git_url: "git://github.com/microsoft/nfc-talk.git",
          ssh_url: "git@github.com:microsoft/nfc-talk.git",
          clone_url: "https://github.com/microsoft/nfc-talk.git",
          svn_url: "https://github.com/microsoft/nfc-talk",
          homepage: null,
          size: 1279,
          stargazers_count: 29,
          watchers_count: 29,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 24,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 2,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 24,
          open_issues: 2,
          watchers: 29,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13740629,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzc0MDYyOQ==",
          name: "car-trumps",
          full_name: "microsoft/car-trumps",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/car-trumps",
          description:
            "Car Trumps is a well-known children's card game for Windows Phone 8. In it you are dealt a car card in random, and you must choose what you think is the car’s best category. The selected category is compared to your friend’s car, and the winner gets both cards. This application demonstrates the use of NFC for communication between Windows Phone 8 devices.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/car-trumps",
          forks_url: "https://api.github.com/repos/microsoft/car-trumps/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/car-trumps/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/car-trumps/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/car-trumps/teams",
          hooks_url: "https://api.github.com/repos/microsoft/car-trumps/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/car-trumps/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/car-trumps/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/car-trumps/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/car-trumps/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/car-trumps/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/car-trumps/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/car-trumps/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/car-trumps/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/car-trumps/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/car-trumps/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/car-trumps/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/car-trumps/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/car-trumps/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/car-trumps/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/car-trumps/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/car-trumps/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/car-trumps/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/car-trumps/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/car-trumps/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/car-trumps/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/car-trumps/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/car-trumps/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/car-trumps/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/car-trumps/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/car-trumps/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/car-trumps/deployments",
          created_at: "2013-10-21T11:41:17Z",
          updated_at: "2020-05-05T09:34:59Z",
          pushed_at: "2016-11-22T09:23:32Z",
          git_url: "git://github.com/microsoft/car-trumps.git",
          ssh_url: "git@github.com:microsoft/car-trumps.git",
          clone_url: "https://github.com/microsoft/car-trumps.git",
          svn_url: "https://github.com/microsoft/car-trumps",
          homepage: null,
          size: 3594,
          stargazers_count: 10,
          watchers_count: 10,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 15,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 15,
          open_issues: 0,
          watchers: 10,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13795530,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzc5NTUzMA==",
          name: "drumkit-wp",
          full_name: "microsoft/drumkit-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/drumkit-wp",
          description:
            "Drumkit XNA is a virtual drumkit that lets you play percussion sounds by  tapping sound pads. The application contains two views for playing, a simple view with 2D pads and a whole 3D like drumset to play with. You can record  your beats and play them back afterwards. It is also possible to play the  drums on top of your last recording.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/drumkit-wp",
          forks_url: "https://api.github.com/repos/microsoft/drumkit-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/drumkit-wp/teams",
          hooks_url: "https://api.github.com/repos/microsoft/drumkit-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/drumkit-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/deployments",
          created_at: "2013-10-23T06:47:11Z",
          updated_at: "2020-05-09T09:05:36Z",
          pushed_at: "2016-11-22T09:24:35Z",
          git_url: "git://github.com/microsoft/drumkit-wp.git",
          ssh_url: "git@github.com:microsoft/drumkit-wp.git",
          clone_url: "https://github.com/microsoft/drumkit-wp.git",
          svn_url: "https://github.com/microsoft/drumkit-wp",
          homepage: "",
          size: 4134,
          stargazers_count: 22,
          watchers_count: 22,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 18,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 18,
          open_issues: 0,
          watchers: 22,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13832727,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzgzMjcyNw==",
          name: "bubble-level-wp",
          full_name: "microsoft/bubble-level-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/bubble-level-wp",
          description:
            "Bubble Level is a simple Windows Phone example application demonstrating the use of accelerometer sensors to calculate the inclination of the device and presents this as a traditional bubble level.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/bubble-level-wp",
          forks_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/deployments",
          created_at: "2013-10-24T13:22:49Z",
          updated_at: "2020-05-05T09:31:57Z",
          pushed_at: "2014-11-27T11:59:07Z",
          git_url: "git://github.com/microsoft/bubble-level-wp.git",
          ssh_url: "git@github.com:microsoft/bubble-level-wp.git",
          clone_url: "https://github.com/microsoft/bubble-level-wp.git",
          svn_url: "https://github.com/microsoft/bubble-level-wp",
          homepage: null,
          size: 2134,
          stargazers_count: 9,
          watchers_count: 9,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 14,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 14,
          open_issues: 0,
          watchers: 9,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13832862,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzgzMjg2Mg==",
          name: "phone-info",
          full_name: "microsoft/phone-info",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/phone-info",
          description:
            "An example application for retrieving both static and dynamic properties of a Windows Phone device. The methods demonstrated by this app can be used for adapting your application to wider range of phone models; If a phone does not support a certain non-vital feature of your application, you can gracefully adapt by hiding that feature dynamically.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/phone-info",
          forks_url: "https://api.github.com/repos/microsoft/phone-info/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/phone-info/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/phone-info/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/phone-info/teams",
          hooks_url: "https://api.github.com/repos/microsoft/phone-info/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/phone-info/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/phone-info/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/phone-info/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/phone-info/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/phone-info/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/phone-info/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/phone-info/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/phone-info/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/phone-info/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/phone-info/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/phone-info/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/phone-info/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/phone-info/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/phone-info/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/phone-info/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/phone-info/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/phone-info/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/phone-info/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/phone-info/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/phone-info/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/phone-info/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/phone-info/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/phone-info/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/phone-info/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/phone-info/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/phone-info/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/phone-info/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/phone-info/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/phone-info/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/phone-info/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/phone-info/deployments",
          created_at: "2013-10-24T13:28:14Z",
          updated_at: "2020-05-09T12:00:46Z",
          pushed_at: "2014-11-28T12:28:58Z",
          git_url: "git://github.com/microsoft/phone-info.git",
          ssh_url: "git@github.com:microsoft/phone-info.git",
          clone_url: "https://github.com/microsoft/phone-info.git",
          svn_url: "https://github.com/microsoft/phone-info",
          homepage:
            "http://developer.nokia.com/resources/library/Lumia/how-to-adapt-to-lumia-phone-hardware-features/hardware-info-test-app.html",
          size: 16330,
          stargazers_count: 35,
          watchers_count: 35,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 27,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 27,
          open_issues: 1,
          watchers: 35,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13859300,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzg1OTMwMA==",
          name: "launchapp-tag-maker",
          full_name: "microsoft/launchapp-tag-maker",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/launchapp-tag-maker",
          description:
            "LaunchApp Tag Maker allows you to ceate NFC tags which can launch any apps available at ​http://www.windowsphone.com/ or apps that you installed youself. ",
          fork: false,
          url: "https://api.github.com/repos/microsoft/launchapp-tag-maker",
          forks_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/deployments",
          created_at: "2013-10-25T11:57:24Z",
          updated_at: "2020-05-09T10:13:01Z",
          pushed_at: "2014-11-12T13:50:26Z",
          git_url: "git://github.com/microsoft/launchapp-tag-maker.git",
          ssh_url: "git@github.com:microsoft/launchapp-tag-maker.git",
          clone_url: "https://github.com/microsoft/launchapp-tag-maker.git",
          svn_url: "https://github.com/microsoft/launchapp-tag-maker",
          homepage: null,
          size: 451,
          stargazers_count: 11,
          watchers_count: 11,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 10,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 10,
          open_issues: 0,
          watchers: 11,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13859428,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzg1OTQyOA==",
          name: "matchem-poker-wp",
          full_name: "microsoft/matchem-poker-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/matchem-poker-wp",
          description:
            "Arcade style match-N game with poker hands implementaion for Windows Phone devices.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/matchem-poker-wp",
          forks_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/deployments",
          created_at: "2013-10-25T12:03:20Z",
          updated_at: "2020-05-09T10:40:16Z",
          pushed_at: "2014-11-28T13:16:03Z",
          git_url: "git://github.com/microsoft/matchem-poker-wp.git",
          ssh_url: "git@github.com:microsoft/matchem-poker-wp.git",
          clone_url: "https://github.com/microsoft/matchem-poker-wp.git",
          svn_url: "https://github.com/microsoft/matchem-poker-wp",
          homepage: null,
          size: 12836,
          stargazers_count: 9,
          watchers_count: 9,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 13,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 13,
          open_issues: 0,
          watchers: 9,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
      ];
    const repos =
      // 20210127001624
      // https://api.github.com/orgs/microsoft/repos?per_page=20?created:%20asc

      [
        {
          id: 1932083,
          node_id: "MDEwOlJlcG9zaXRvcnkxOTMyMDgz",
          name: "HealthVault-Mobile-iOS-Library",
          full_name: "microsoft/HealthVault-Mobile-iOS-Library",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url:
            "https://github.com/microsoft/HealthVault-Mobile-iOS-Library",
          description:
            "The HealthVault team has recently added the capability to write applications that will run on Mobile Devices and connect directly to the HealthVault Service. HealthVault iOS library enables developers to write iOS applications which interact with a user's personally controlled health record. The “go live” process to deploy an application against the production HealthVault service can be found at http://msdn.microsoft.com/en-us/healthvault/bb962148. Information about the API that the HealthVault service exposes can be in the documentation in HealthVault .NET SDK.",
          fork: false,
          url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library",
          forks_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/HealthVault-Mobile-iOS-Library/deployments",
          created_at: "2011-06-21T22:49:39Z",
          updated_at: "2021-01-13T20:31:15Z",
          pushed_at: "2017-04-28T17:05:02Z",
          git_url:
            "git://github.com/microsoft/HealthVault-Mobile-iOS-Library.git",
          ssh_url:
            "git@github.com:microsoft/HealthVault-Mobile-iOS-Library.git",
          clone_url:
            "https://github.com/microsoft/HealthVault-Mobile-iOS-Library.git",
          svn_url:
            "https://github.com/microsoft/HealthVault-Mobile-iOS-Library",
          homepage: "http://msdn.com/healthvault",
          size: 798,
          stargazers_count: 41,
          watchers_count: 41,
          language: "Objective-C",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 20,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 2,
          license: null,
          forks: 20,
          open_issues: 2,
          watchers: 41,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 3085152,
          node_id: "MDEwOlJlcG9zaXRvcnkzMDg1MTUy",
          name: "BeanSpy",
          full_name: "microsoft/BeanSpy",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/BeanSpy",
          description:
            "BeanSpy is an open source Java servlet technology provided by Microsoft to retrieve JMX information from Java EE application servers",
          fork: false,
          url: "https://api.github.com/repos/microsoft/BeanSpy",
          forks_url: "https://api.github.com/repos/microsoft/BeanSpy/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/BeanSpy/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/BeanSpy/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/BeanSpy/teams",
          hooks_url: "https://api.github.com/repos/microsoft/BeanSpy/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/BeanSpy/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/BeanSpy/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/BeanSpy/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/BeanSpy/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/BeanSpy/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/BeanSpy/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/BeanSpy/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/BeanSpy/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/BeanSpy/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/BeanSpy/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/BeanSpy/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/BeanSpy/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/BeanSpy/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/BeanSpy/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/BeanSpy/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/BeanSpy/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/BeanSpy/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/BeanSpy/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/BeanSpy/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/BeanSpy/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/BeanSpy/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/BeanSpy/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/BeanSpy/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/BeanSpy/deployments",
          created_at: "2012-01-02T02:03:37Z",
          updated_at: "2020-05-04T09:55:34Z",
          pushed_at: "2018-10-15T18:13:18Z",
          git_url: "git://github.com/microsoft/BeanSpy.git",
          ssh_url: "git@github.com:microsoft/BeanSpy.git",
          clone_url: "https://github.com/microsoft/BeanSpy.git",
          svn_url: "https://github.com/microsoft/BeanSpy",
          homepage: "",
          size: 325,
          stargazers_count: 20,
          watchers_count: 20,
          language: "Java",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 17,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 5,
          license: {
            key: "apache-2.0",
            name: "Apache License 2.0",
            spdx_id: "Apache-2.0",
            url: "https://api.github.com/licenses/apache-2.0",
            node_id: "MDc6TGljZW5zZTI=",
          },
          forks: 17,
          open_issues: 5,
          watchers: 20,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 4047810,
          node_id: "MDEwOlJlcG9zaXRvcnk0MDQ3ODEw",
          name: "healthvault-ios-sdk",
          full_name: "microsoft/healthvault-ios-sdk",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/healthvault-ios-sdk",
          description:
            "This library is used for the HealthVault for iPhone app. Ongoing updates & bug fixes",
          fork: false,
          url: "https://api.github.com/repos/microsoft/healthvault-ios-sdk",
          forks_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/healthvault-ios-sdk/deployments",
          created_at: "2012-04-17T01:33:37Z",
          updated_at: "2021-01-13T20:30:03Z",
          pushed_at: "2017-10-10T17:03:00Z",
          git_url: "git://github.com/microsoft/healthvault-ios-sdk.git",
          ssh_url: "git@github.com:microsoft/healthvault-ios-sdk.git",
          clone_url: "https://github.com/microsoft/healthvault-ios-sdk.git",
          svn_url: "https://github.com/microsoft/healthvault-ios-sdk",
          homepage: "",
          size: 10007,
          stargazers_count: 28,
          watchers_count: 28,
          language: "C",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 15,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 2,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 15,
          open_issues: 2,
          watchers: 28,
          default_branch: "microsoft/develop",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 5590199,
          node_id: "MDEwOlJlcG9zaXRvcnk1NTkwMTk5",
          name: "WindowsAzureToolkitForEclipseWithJava",
          full_name: "microsoft/WindowsAzureToolkitForEclipseWithJava",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url:
            "https://github.com/microsoft/WindowsAzureToolkitForEclipseWithJava",
          description: "Windows Azure Toolkit for Eclipse with Java",
          fork: false,
          url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava",
          forks_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/WindowsAzureToolkitForEclipseWithJava/deployments",
          created_at: "2012-08-28T18:33:11Z",
          updated_at: "2021-01-26T19:00:22Z",
          pushed_at: "2016-03-15T20:13:51Z",
          git_url:
            "git://github.com/microsoft/WindowsAzureToolkitForEclipseWithJava.git",
          ssh_url:
            "git@github.com:microsoft/WindowsAzureToolkitForEclipseWithJava.git",
          clone_url:
            "https://github.com/microsoft/WindowsAzureToolkitForEclipseWithJava.git",
          svn_url:
            "https://github.com/microsoft/WindowsAzureToolkitForEclipseWithJava",
          homepage: null,
          size: 82855,
          stargazers_count: 41,
          watchers_count: 41,
          language: "Java",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 40,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 2,
          license: null,
          forks: 40,
          open_issues: 2,
          watchers: 41,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 10075507,
          node_id: "MDEwOlJlcG9zaXRvcnkxMDA3NTUwNw==",
          name: "php-sdk-binary-tools",
          full_name: "microsoft/php-sdk-binary-tools",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/php-sdk-binary-tools",
          description: "Tool kit for building PHP under Windows",
          fork: false,
          url: "https://api.github.com/repos/microsoft/php-sdk-binary-tools",
          forks_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/php-sdk-binary-tools/deployments",
          created_at: "2013-05-15T09:42:29Z",
          updated_at: "2021-01-24T21:01:46Z",
          pushed_at: "2020-08-03T08:23:44Z",
          git_url: "git://github.com/microsoft/php-sdk-binary-tools.git",
          ssh_url: "git@github.com:microsoft/php-sdk-binary-tools.git",
          clone_url: "https://github.com/microsoft/php-sdk-binary-tools.git",
          svn_url: "https://github.com/microsoft/php-sdk-binary-tools",
          homepage: "",
          size: 116034,
          stargazers_count: 202,
          watchers_count: 202,
          language: "M4",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 61,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 3,
          license: {
            key: "bsd-2-clause",
            name: 'BSD 2-Clause "Simplified" License',
            spdx_id: "BSD-2-Clause",
            url: "https://api.github.com/licenses/bsd-2-clause",
            node_id: "MDc6TGljZW5zZTQ=",
          },
          forks: 61,
          open_issues: 3,
          watchers: 202,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11571442,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTU3MTQ0Mg==",
          name: "plcrashreporter",
          full_name: "microsoft/plcrashreporter",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/plcrashreporter",
          description:
            "Reliable, open-source crash reporting for iOS, macOS and tvOS",
          fork: false,
          url: "https://api.github.com/repos/microsoft/plcrashreporter",
          forks_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/plcrashreporter/deployments",
          created_at: "2013-07-22T02:38:00Z",
          updated_at: "2021-01-26T12:28:06Z",
          pushed_at: "2021-01-15T14:28:07Z",
          git_url: "git://github.com/microsoft/plcrashreporter.git",
          ssh_url: "git@github.com:microsoft/plcrashreporter.git",
          clone_url: "https://github.com/microsoft/plcrashreporter.git",
          svn_url: "https://github.com/microsoft/plcrashreporter",
          homepage: "",
          size: 23483,
          stargazers_count: 1963,
          watchers_count: 1963,
          language: "Objective-C",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 398,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 8,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 398,
          open_issues: 8,
          watchers: 1963,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11635549,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTYzNTU0OQ==",
          name: "filter-explorer",
          full_name: "microsoft/filter-explorer",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/filter-explorer",
          description:
            "Filter Explorer is an example application which demonstrates some of the image editing capabilities and performance of the Imaging SDK by allowing the user to apply a number of filter layers to existing or newly captured photos.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/filter-explorer",
          forks_url:
            "https://api.github.com/repos/microsoft/filter-explorer/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/filter-explorer/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/filter-explorer/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/filter-explorer/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/filter-explorer/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/filter-explorer/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/filter-explorer/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/filter-explorer/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/filter-explorer/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/filter-explorer/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/filter-explorer/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/filter-explorer/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/filter-explorer/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/filter-explorer/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/filter-explorer/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/filter-explorer/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/filter-explorer/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/filter-explorer/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/filter-explorer/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/filter-explorer/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/filter-explorer/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/filter-explorer/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/filter-explorer/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/filter-explorer/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/filter-explorer/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/filter-explorer/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/filter-explorer/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/filter-explorer/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/filter-explorer/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/filter-explorer/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/filter-explorer/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/filter-explorer/deployments",
          created_at: "2013-07-24T13:36:42Z",
          updated_at: "2020-11-20T21:33:02Z",
          pushed_at: "2015-04-29T07:57:07Z",
          git_url: "git://github.com/microsoft/filter-explorer.git",
          ssh_url: "git@github.com:microsoft/filter-explorer.git",
          clone_url: "https://github.com/microsoft/filter-explorer.git",
          svn_url: "https://github.com/microsoft/filter-explorer",
          homepage: "",
          size: 53467,
          stargazers_count: 26,
          watchers_count: 26,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 19,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 3,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 19,
          open_issues: 3,
          watchers: 26,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11734841,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNDg0MQ==",
          name: "filter-effects",
          full_name: "microsoft/filter-effects",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/filter-effects",
          description:
            "An example application demonstrating the use of the different filters of Imaging SDK with camera photos. This example app uses the camera and displays the viewfinder for taking a picture. The taken photo is then processed with the predefined filters. The filter properties can be manipulated and the changes can be seen in the preview image immediately. The processed image can be saved in JPEG format to the device. You can also select an existing photo and apply an effect to it.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/filter-effects",
          forks_url:
            "https://api.github.com/repos/microsoft/filter-effects/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/filter-effects/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/filter-effects/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/filter-effects/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/filter-effects/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/filter-effects/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/filter-effects/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/filter-effects/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/filter-effects/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/filter-effects/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/filter-effects/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/filter-effects/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/filter-effects/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/filter-effects/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/filter-effects/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/filter-effects/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/filter-effects/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/filter-effects/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/filter-effects/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/filter-effects/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/filter-effects/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/filter-effects/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/filter-effects/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/filter-effects/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/filter-effects/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/filter-effects/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/filter-effects/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/filter-effects/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/filter-effects/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/filter-effects/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/filter-effects/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/filter-effects/deployments",
          created_at: "2013-07-29T08:30:45Z",
          updated_at: "2020-05-09T09:37:49Z",
          pushed_at: "2015-04-29T07:57:08Z",
          git_url: "git://github.com/microsoft/filter-effects.git",
          ssh_url: "git@github.com:microsoft/filter-effects.git",
          clone_url: "https://github.com/microsoft/filter-effects.git",
          svn_url: "https://github.com/microsoft/filter-effects",
          homepage:
            "http://developer.nokia.com/resources/library/Lumia/nokia-imaging-sdk/sample-projects/filter-effects.html",
          size: 19687,
          stargazers_count: 30,
          watchers_count: 30,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 21,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 4,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 21,
          open_issues: 4,
          watchers: 30,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11734950,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNDk1MA==",
          name: "real-time-filter-demo",
          full_name: "microsoft/real-time-filter-demo",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/real-time-filter-demo",
          description:
            "An example application demonstrating the use of the Imaging SDK for real-time image effects. The effects are applied to the stream received from the camera and shown in the viewfinder. This app does not support capturing photos.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/real-time-filter-demo",
          forks_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/real-time-filter-demo/deployments",
          created_at: "2013-07-29T08:36:12Z",
          updated_at: "2020-12-23T06:46:13Z",
          pushed_at: "2015-04-29T07:57:25Z",
          git_url: "git://github.com/microsoft/real-time-filter-demo.git",
          ssh_url: "git@github.com:microsoft/real-time-filter-demo.git",
          clone_url: "https://github.com/microsoft/real-time-filter-demo.git",
          svn_url: "https://github.com/microsoft/real-time-filter-demo",
          homepage: "",
          size: 23481,
          stargazers_count: 31,
          watchers_count: 31,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 24,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "mit",
            name: "MIT License",
            spdx_id: "MIT",
            url: "https://api.github.com/licenses/mit",
            node_id: "MDc6TGljZW5zZTEz",
          },
          forks: 24,
          open_issues: 1,
          watchers: 31,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735149,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTE0OQ==",
          name: "photo-inspector",
          full_name: "microsoft/photo-inspector",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/photo-inspector",
          description:
            "Photo Inspector is an example application on how to capture and process high resolution photos (resolution depends on device hardware).",
          fork: false,
          url: "https://api.github.com/repos/microsoft/photo-inspector",
          forks_url:
            "https://api.github.com/repos/microsoft/photo-inspector/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/photo-inspector/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/photo-inspector/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/photo-inspector/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/photo-inspector/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/photo-inspector/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/photo-inspector/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/photo-inspector/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/photo-inspector/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/photo-inspector/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/photo-inspector/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/photo-inspector/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/photo-inspector/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/photo-inspector/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/photo-inspector/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/photo-inspector/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/photo-inspector/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/photo-inspector/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/photo-inspector/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/photo-inspector/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/photo-inspector/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/photo-inspector/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/photo-inspector/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/photo-inspector/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/photo-inspector/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/photo-inspector/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/photo-inspector/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/photo-inspector/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/photo-inspector/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/photo-inspector/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/photo-inspector/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/photo-inspector/deployments",
          created_at: "2013-07-29T08:47:31Z",
          updated_at: "2020-11-20T21:32:34Z",
          pushed_at: "2014-11-28T13:31:47Z",
          git_url: "git://github.com/microsoft/photo-inspector.git",
          ssh_url: "git@github.com:microsoft/photo-inspector.git",
          clone_url: "https://github.com/microsoft/photo-inspector.git",
          svn_url: "https://github.com/microsoft/photo-inspector",
          homepage: null,
          size: 22391,
          stargazers_count: 25,
          watchers_count: 25,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 18,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 18,
          open_issues: 1,
          watchers: 25,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735223,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTIyMw==",
          name: "camera-explorer",
          full_name: "microsoft/camera-explorer",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/camera-explorer",
          description:
            "Camera Explorer application for Windows Phone 8 demonstrates the use of the new advanced Windows Phone 8 camera API, the Windows.Phone.Media.Capture.PhotoCaptureDevice and the related classes and enumerations on Lumia devices.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/camera-explorer",
          forks_url:
            "https://api.github.com/repos/microsoft/camera-explorer/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/camera-explorer/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/camera-explorer/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/camera-explorer/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/camera-explorer/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/camera-explorer/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/camera-explorer/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/camera-explorer/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/camera-explorer/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/camera-explorer/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/camera-explorer/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/camera-explorer/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/camera-explorer/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/camera-explorer/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/camera-explorer/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/camera-explorer/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/camera-explorer/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/camera-explorer/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/camera-explorer/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/camera-explorer/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/camera-explorer/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/camera-explorer/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/camera-explorer/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/camera-explorer/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/camera-explorer/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/camera-explorer/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/camera-explorer/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/camera-explorer/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/camera-explorer/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/camera-explorer/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/camera-explorer/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/camera-explorer/deployments",
          created_at: "2013-07-29T08:51:40Z",
          updated_at: "2020-05-05T09:34:44Z",
          pushed_at: "2014-11-28T12:04:47Z",
          git_url: "git://github.com/microsoft/camera-explorer.git",
          ssh_url: "git@github.com:microsoft/camera-explorer.git",
          clone_url: "https://github.com/microsoft/camera-explorer.git",
          svn_url: "https://github.com/microsoft/camera-explorer",
          homepage: "",
          size: 10398,
          stargazers_count: 18,
          watchers_count: 18,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 21,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 21,
          open_issues: 1,
          watchers: 18,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735455,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTQ1NQ==",
          name: "map-explorer",
          full_name: "microsoft/map-explorer",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/map-explorer",
          description:
            "Map Explorer is an example application demonstrating how to use the new Windows Phone 8 Maps API replacing the Bing Maps used in Windows Phone 7.x.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/map-explorer",
          forks_url:
            "https://api.github.com/repos/microsoft/map-explorer/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/map-explorer/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/map-explorer/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/map-explorer/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/map-explorer/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/map-explorer/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/map-explorer/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/map-explorer/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/map-explorer/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/map-explorer/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/map-explorer/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/map-explorer/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/map-explorer/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/map-explorer/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/map-explorer/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/map-explorer/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/map-explorer/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/map-explorer/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/map-explorer/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/map-explorer/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/map-explorer/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/map-explorer/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/map-explorer/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/map-explorer/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/map-explorer/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/map-explorer/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/map-explorer/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/map-explorer/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/map-explorer/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/map-explorer/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/map-explorer/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/map-explorer/deployments",
          created_at: "2013-07-29T09:02:19Z",
          updated_at: "2020-09-22T00:09:05Z",
          pushed_at: "2014-11-28T12:36:56Z",
          git_url: "git://github.com/microsoft/map-explorer.git",
          ssh_url: "git@github.com:microsoft/map-explorer.git",
          clone_url: "https://github.com/microsoft/map-explorer.git",
          svn_url: "https://github.com/microsoft/map-explorer",
          homepage: "",
          size: 6341,
          stargazers_count: 23,
          watchers_count: 23,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 20,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 20,
          open_issues: 0,
          watchers: 23,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735508,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTUwOA==",
          name: "music-explorer",
          full_name: "microsoft/music-explorer",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/music-explorer",
          description:
            "Music Explorer is an example application demonstrating the use of Nokia Music API together with standard Windows Phone 8 audio features to create an immersive music experience.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/music-explorer",
          forks_url:
            "https://api.github.com/repos/microsoft/music-explorer/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/music-explorer/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/music-explorer/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/music-explorer/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/music-explorer/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/music-explorer/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/music-explorer/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/music-explorer/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/music-explorer/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/music-explorer/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/music-explorer/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/music-explorer/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/music-explorer/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/music-explorer/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/music-explorer/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/music-explorer/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/music-explorer/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/music-explorer/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/music-explorer/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/music-explorer/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/music-explorer/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/music-explorer/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/music-explorer/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/music-explorer/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/music-explorer/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/music-explorer/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/music-explorer/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/music-explorer/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/music-explorer/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/music-explorer/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/music-explorer/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/music-explorer/deployments",
          created_at: "2013-07-29T09:05:41Z",
          updated_at: "2020-12-01T08:17:40Z",
          pushed_at: "2018-10-03T00:14:19Z",
          git_url: "git://github.com/microsoft/music-explorer.git",
          ssh_url: "git@github.com:microsoft/music-explorer.git",
          clone_url: "https://github.com/microsoft/music-explorer.git",
          svn_url: "https://github.com/microsoft/music-explorer",
          homepage: "",
          size: 15066,
          stargazers_count: 25,
          watchers_count: 25,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 23,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 23,
          open_issues: 1,
          watchers: 25,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 11735785,
          node_id: "MDEwOlJlcG9zaXRvcnkxMTczNTc4NQ==",
          name: "here-launchers",
          full_name: "microsoft/here-launchers",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/here-launchers",
          description:
            "HERE Launchers API library and source codes, as well the demo application illustrating the use of the API.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/here-launchers",
          forks_url:
            "https://api.github.com/repos/microsoft/here-launchers/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/here-launchers/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/here-launchers/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/here-launchers/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/here-launchers/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/here-launchers/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/here-launchers/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/here-launchers/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/here-launchers/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/here-launchers/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/here-launchers/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/here-launchers/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/here-launchers/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/here-launchers/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/here-launchers/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/here-launchers/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/here-launchers/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/here-launchers/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/here-launchers/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/here-launchers/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/here-launchers/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/here-launchers/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/here-launchers/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/here-launchers/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/here-launchers/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/here-launchers/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/here-launchers/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/here-launchers/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/here-launchers/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/here-launchers/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/here-launchers/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/here-launchers/deployments",
          created_at: "2013-07-29T09:19:59Z",
          updated_at: "2020-05-11T18:48:52Z",
          pushed_at: "2014-12-04T07:42:35Z",
          git_url: "git://github.com/microsoft/here-launchers.git",
          ssh_url: "git@github.com:microsoft/here-launchers.git",
          clone_url: "https://github.com/microsoft/here-launchers.git",
          svn_url: "https://github.com/microsoft/here-launchers",
          homepage: null,
          size: 2224,
          stargazers_count: 22,
          watchers_count: 22,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 25,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: null,
          forks: 25,
          open_issues: 1,
          watchers: 22,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12737157,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjczNzE1Nw==",
          name: "azure-puppet",
          full_name: "microsoft/azure-puppet",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/azure-puppet",
          description: null,
          fork: false,
          url: "https://api.github.com/repos/microsoft/azure-puppet",
          forks_url:
            "https://api.github.com/repos/microsoft/azure-puppet/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/azure-puppet/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/azure-puppet/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/azure-puppet/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/azure-puppet/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/azure-puppet/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/azure-puppet/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/azure-puppet/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/azure-puppet/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/azure-puppet/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/azure-puppet/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/azure-puppet/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/azure-puppet/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/azure-puppet/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/azure-puppet/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/azure-puppet/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/azure-puppet/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/azure-puppet/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/azure-puppet/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/azure-puppet/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/azure-puppet/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/azure-puppet/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/azure-puppet/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/azure-puppet/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/azure-puppet/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/azure-puppet/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/azure-puppet/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/azure-puppet/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/azure-puppet/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/azure-puppet/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/azure-puppet/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/azure-puppet/deployments",
          created_at: "2013-09-10T18:26:20Z",
          updated_at: "2021-01-26T18:44:28Z",
          pushed_at: "2018-10-06T08:41:15Z",
          git_url: "git://github.com/microsoft/azure-puppet.git",
          ssh_url: "git@github.com:microsoft/azure-puppet.git",
          clone_url: "https://github.com/microsoft/azure-puppet.git",
          svn_url: "https://github.com/microsoft/azure-puppet",
          homepage: null,
          size: 833,
          stargazers_count: 19,
          watchers_count: 19,
          language: "Ruby",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 24,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 17,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 24,
          open_issues: 17,
          watchers: 19,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914921,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDkyMQ==",
          name: "weekly-planner-wp",
          full_name: "microsoft/weekly-planner-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/weekly-planner-wp",
          description:
            "Weekly Planner is an example application for planning weekly schedule e.g. for students and school kids. The application demonstrates usage of pivot control, custom tabular UI component, content editing and storing local data.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/weekly-planner-wp",
          forks_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/weekly-planner-wp/deployments",
          created_at: "2013-09-18T05:33:21Z",
          updated_at: "2020-05-10T08:09:04Z",
          pushed_at: "2014-11-12T13:18:56Z",
          git_url: "git://github.com/microsoft/weekly-planner-wp.git",
          ssh_url: "git@github.com:microsoft/weekly-planner-wp.git",
          clone_url: "https://github.com/microsoft/weekly-planner-wp.git",
          svn_url: "https://github.com/microsoft/weekly-planner-wp",
          homepage: "",
          size: 3134,
          stargazers_count: 20,
          watchers_count: 20,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 13,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 13,
          open_issues: 0,
          watchers: 20,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914933,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDkzMw==",
          name: "drumkitx",
          full_name: "microsoft/drumkitx",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/drumkitx",
          description:
            "A Windows Phone 8 port of the ​Drumkit XNA example using Direct3D and XAudio for fast graphics and low latency sample playback. This demo app lets you play percussion sounds by tapping the screen. You can record your beats, play them back later and also play drums on top of your latest recording.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/drumkitx",
          forks_url: "https://api.github.com/repos/microsoft/drumkitx/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/drumkitx/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/drumkitx/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/drumkitx/teams",
          hooks_url: "https://api.github.com/repos/microsoft/drumkitx/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/drumkitx/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/drumkitx/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/drumkitx/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/drumkitx/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/drumkitx/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/drumkitx/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/drumkitx/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/drumkitx/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/drumkitx/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/drumkitx/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/drumkitx/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/drumkitx/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/drumkitx/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/drumkitx/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/drumkitx/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/drumkitx/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/drumkitx/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/drumkitx/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/drumkitx/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/drumkitx/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/drumkitx/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/drumkitx/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/drumkitx/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/drumkitx/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/drumkitx/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/drumkitx/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/drumkitx/deployments",
          created_at: "2013-09-18T05:34:17Z",
          updated_at: "2020-09-10T02:46:07Z",
          pushed_at: "2014-11-28T12:14:50Z",
          git_url: "git://github.com/microsoft/drumkitx.git",
          ssh_url: "git@github.com:microsoft/drumkitx.git",
          clone_url: "https://github.com/microsoft/drumkitx.git",
          svn_url: "https://github.com/microsoft/drumkitx",
          homepage: null,
          size: 8335,
          stargazers_count: 18,
          watchers_count: 18,
          language: "C++",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 13,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 13,
          open_issues: 0,
          watchers: 18,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914939,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDkzOQ==",
          name: "diner-wp",
          full_name: "microsoft/diner-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/diner-wp",
          description:
            "The Diner example application demonstrates how to build simple, catalog-type application, for Windows Phone based on local XML data. It is straightforward to convert the application to use internet resources instead of local XML-resources. The application is designed in such a way that it is easy to replace the content and visual style for different restaurants.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/diner-wp",
          forks_url: "https://api.github.com/repos/microsoft/diner-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/diner-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/diner-wp/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/diner-wp/teams",
          hooks_url: "https://api.github.com/repos/microsoft/diner-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/diner-wp/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/diner-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/diner-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/diner-wp/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/diner-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/diner-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/diner-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/diner-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/diner-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/diner-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/diner-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/diner-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/diner-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/diner-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/diner-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/diner-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/diner-wp/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/diner-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/diner-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/diner-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/diner-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/diner-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/diner-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/diner-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/diner-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/diner-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/diner-wp/deployments",
          created_at: "2013-09-18T05:34:41Z",
          updated_at: "2020-05-09T09:00:56Z",
          pushed_at: "2014-11-07T11:48:37Z",
          git_url: "git://github.com/microsoft/diner-wp.git",
          ssh_url: "git@github.com:microsoft/diner-wp.git",
          clone_url: "https://github.com/microsoft/diner-wp.git",
          svn_url: "https://github.com/microsoft/diner-wp",
          homepage: null,
          size: 9073,
          stargazers_count: 14,
          watchers_count: 14,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 13,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 13,
          open_issues: 0,
          watchers: 14,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914958,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDk1OA==",
          name: "rss-reader-wp",
          full_name: "microsoft/rss-reader-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/rss-reader-wp",
          description:
            "The RSS Reader Example Application demonstrates the use of RSS feed resources from the Internet, and concepts such as tombstoning and dynamically generating and modifying the user interface on the fly. It contains a rich UI with view navigation, search, lists and animations.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/rss-reader-wp",
          forks_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/rss-reader-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/rss-reader-wp/deployments",
          created_at: "2013-09-18T05:35:45Z",
          updated_at: "2020-10-07T15:05:27Z",
          pushed_at: "2015-08-27T02:47:22Z",
          git_url: "git://github.com/microsoft/rss-reader-wp.git",
          ssh_url: "git@github.com:microsoft/rss-reader-wp.git",
          clone_url: "https://github.com/microsoft/rss-reader-wp.git",
          svn_url: "https://github.com/microsoft/rss-reader-wp",
          homepage: null,
          size: 1826,
          stargazers_count: 34,
          watchers_count: 34,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 26,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 26,
          open_issues: 0,
          watchers: 34,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12914974,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkxNDk3NA==",
          name: "audio-recorder",
          full_name: "microsoft/audio-recorder",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/audio-recorder",
          description:
            "Audio Recorder is an example application demonstrating how to record and play audio in Windows Phone 8 devices. XNA Audio API and Windows Audio Session API (WASAPI) are covered by the example.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/audio-recorder",
          forks_url:
            "https://api.github.com/repos/microsoft/audio-recorder/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/audio-recorder/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/audio-recorder/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/audio-recorder/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/audio-recorder/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/audio-recorder/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/audio-recorder/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/audio-recorder/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/audio-recorder/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/audio-recorder/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/audio-recorder/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/audio-recorder/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/audio-recorder/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/audio-recorder/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/audio-recorder/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/audio-recorder/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/audio-recorder/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/audio-recorder/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/audio-recorder/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/audio-recorder/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/audio-recorder/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/audio-recorder/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/audio-recorder/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/audio-recorder/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/audio-recorder/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/audio-recorder/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/audio-recorder/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/audio-recorder/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/audio-recorder/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/audio-recorder/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/audio-recorder/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/audio-recorder/deployments",
          created_at: "2013-09-18T05:36:41Z",
          updated_at: "2020-11-30T07:53:54Z",
          pushed_at: "2014-11-28T13:36:27Z",
          git_url: "git://github.com/microsoft/audio-recorder.git",
          ssh_url: "git@github.com:microsoft/audio-recorder.git",
          clone_url: "https://github.com/microsoft/audio-recorder.git",
          svn_url: "https://github.com/microsoft/audio-recorder",
          homepage: "",
          size: 2662,
          stargazers_count: 38,
          watchers_count: 38,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 24,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 3,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 24,
          open_issues: 3,
          watchers: 38,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 12937619,
          node_id: "MDEwOlJlcG9zaXRvcnkxMjkzNzYxOQ==",
          name: "cocos2d-x",
          full_name: "microsoft/cocos2d-x",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/cocos2d-x",
          description:
            "cocos2d for iOS, Android, Win32 and OS X. Built using C++",
          fork: true,
          url: "https://api.github.com/repos/microsoft/cocos2d-x",
          forks_url: "https://api.github.com/repos/microsoft/cocos2d-x/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/cocos2d-x/teams",
          hooks_url: "https://api.github.com/repos/microsoft/cocos2d-x/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/cocos2d-x/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/cocos2d-x/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/cocos2d-x/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/cocos2d-x/deployments",
          created_at: "2013-09-19T00:22:15Z",
          updated_at: "2021-01-26T18:46:12Z",
          pushed_at: "2017-07-17T19:12:47Z",
          git_url: "git://github.com/microsoft/cocos2d-x.git",
          ssh_url: "git@github.com:microsoft/cocos2d-x.git",
          clone_url: "https://github.com/microsoft/cocos2d-x.git",
          svn_url: "https://github.com/microsoft/cocos2d-x",
          homepage: "http://www.cocos2d-x.org",
          size: 916240,
          stargazers_count: 84,
          watchers_count: 84,
          language: "C++",
          has_issues: false,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: true,
          forks_count: 43,
          mirror_url: null,
          archived: true,
          disabled: false,
          open_issues_count: 26,
          license: null,
          forks: 43,
          open_issues: 26,
          watchers: 84,
          default_branch: "v3",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13414312,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzQxNDMxMg==",
          name: "dynamic-layout-sample",
          full_name: "microsoft/dynamic-layout-sample",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/dynamic-layout-sample",
          description:
            "An example application demonstrating how to create a dynamic layouts for different size of resolutions and physical screens on Windows Phone 8 platform.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/dynamic-layout-sample",
          forks_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/dynamic-layout-sample/deployments",
          created_at: "2013-10-08T13:34:39Z",
          updated_at: "2020-05-09T09:10:19Z",
          pushed_at: "2014-11-27T12:04:49Z",
          git_url: "git://github.com/microsoft/dynamic-layout-sample.git",
          ssh_url: "git@github.com:microsoft/dynamic-layout-sample.git",
          clone_url: "https://github.com/microsoft/dynamic-layout-sample.git",
          svn_url: "https://github.com/microsoft/dynamic-layout-sample",
          homepage: "",
          size: 254,
          stargazers_count: 13,
          watchers_count: 13,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: false,
          has_pages: false,
          forks_count: 15,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 15,
          open_issues: 0,
          watchers: 13,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13735970,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzczNTk3MA==",
          name: "nfc-ndef-tag-reader",
          full_name: "microsoft/nfc-ndef-tag-reader",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/nfc-ndef-tag-reader",
          description:
            "A simple NFC tag reader application for Windows Phone 8. This example app demonstrates how to use the Proximity API to read NFC Data Exchange Format (NDEF) compliant tags.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader",
          forks_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/nfc-ndef-tag-reader/deployments",
          created_at: "2013-10-21T07:48:10Z",
          updated_at: "2020-05-09T11:36:34Z",
          pushed_at: "2014-11-28T13:24:28Z",
          git_url: "git://github.com/microsoft/nfc-ndef-tag-reader.git",
          ssh_url: "git@github.com:microsoft/nfc-ndef-tag-reader.git",
          clone_url: "https://github.com/microsoft/nfc-ndef-tag-reader.git",
          svn_url: "https://github.com/microsoft/nfc-ndef-tag-reader",
          homepage: "",
          size: 932,
          stargazers_count: 29,
          watchers_count: 29,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 19,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 19,
          open_issues: 0,
          watchers: 29,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13736643,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzczNjY0Mw==",
          name: "nfc-talk",
          full_name: "microsoft/nfc-talk",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/nfc-talk",
          description:
            "Simple chat application demonstrating NFC tap and Bluetooth search initiated connection establishment and further data transfer.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/nfc-talk",
          forks_url: "https://api.github.com/repos/microsoft/nfc-talk/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/nfc-talk/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/nfc-talk/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/nfc-talk/teams",
          hooks_url: "https://api.github.com/repos/microsoft/nfc-talk/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/nfc-talk/issues/events{/number}",
          events_url: "https://api.github.com/repos/microsoft/nfc-talk/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/nfc-talk/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/nfc-talk/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/nfc-talk/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/nfc-talk/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/nfc-talk/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/nfc-talk/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/nfc-talk/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/nfc-talk/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/nfc-talk/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/nfc-talk/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/nfc-talk/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/nfc-talk/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/nfc-talk/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/nfc-talk/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/nfc-talk/compare/{base}...{head}",
          merges_url: "https://api.github.com/repos/microsoft/nfc-talk/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/nfc-talk/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/nfc-talk/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/nfc-talk/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/nfc-talk/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/nfc-talk/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/nfc-talk/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/nfc-talk/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/nfc-talk/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/nfc-talk/deployments",
          created_at: "2013-10-21T08:24:18Z",
          updated_at: "2020-11-20T21:32:56Z",
          pushed_at: "2018-10-31T17:23:31Z",
          git_url: "git://github.com/microsoft/nfc-talk.git",
          ssh_url: "git@github.com:microsoft/nfc-talk.git",
          clone_url: "https://github.com/microsoft/nfc-talk.git",
          svn_url: "https://github.com/microsoft/nfc-talk",
          homepage: null,
          size: 1279,
          stargazers_count: 29,
          watchers_count: 29,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 24,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 2,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 24,
          open_issues: 2,
          watchers: 29,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13740629,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzc0MDYyOQ==",
          name: "car-trumps",
          full_name: "microsoft/car-trumps",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/car-trumps",
          description:
            "Car Trumps is a well-known children's card game for Windows Phone 8. In it you are dealt a car card in random, and you must choose what you think is the car’s best category. The selected category is compared to your friend’s car, and the winner gets both cards. This application demonstrates the use of NFC for communication between Windows Phone 8 devices.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/car-trumps",
          forks_url: "https://api.github.com/repos/microsoft/car-trumps/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/car-trumps/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/car-trumps/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/car-trumps/teams",
          hooks_url: "https://api.github.com/repos/microsoft/car-trumps/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/car-trumps/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/car-trumps/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/car-trumps/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/car-trumps/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/car-trumps/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/car-trumps/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/car-trumps/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/car-trumps/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/car-trumps/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/car-trumps/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/car-trumps/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/car-trumps/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/car-trumps/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/car-trumps/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/car-trumps/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/car-trumps/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/car-trumps/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/car-trumps/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/car-trumps/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/car-trumps/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/car-trumps/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/car-trumps/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/car-trumps/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/car-trumps/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/car-trumps/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/car-trumps/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/car-trumps/deployments",
          created_at: "2013-10-21T11:41:17Z",
          updated_at: "2020-05-05T09:34:59Z",
          pushed_at: "2016-11-22T09:23:32Z",
          git_url: "git://github.com/microsoft/car-trumps.git",
          ssh_url: "git@github.com:microsoft/car-trumps.git",
          clone_url: "https://github.com/microsoft/car-trumps.git",
          svn_url: "https://github.com/microsoft/car-trumps",
          homepage: null,
          size: 3594,
          stargazers_count: 10,
          watchers_count: 10,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 15,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 15,
          open_issues: 0,
          watchers: 10,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13795530,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzc5NTUzMA==",
          name: "drumkit-wp",
          full_name: "microsoft/drumkit-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/drumkit-wp",
          description:
            "Drumkit XNA is a virtual drumkit that lets you play percussion sounds by  tapping sound pads. The application contains two views for playing, a simple view with 2D pads and a whole 3D like drumset to play with. You can record  your beats and play them back afterwards. It is also possible to play the  drums on top of your last recording.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/drumkit-wp",
          forks_url: "https://api.github.com/repos/microsoft/drumkit-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/drumkit-wp/teams",
          hooks_url: "https://api.github.com/repos/microsoft/drumkit-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/drumkit-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/drumkit-wp/deployments",
          created_at: "2013-10-23T06:47:11Z",
          updated_at: "2020-05-09T09:05:36Z",
          pushed_at: "2016-11-22T09:24:35Z",
          git_url: "git://github.com/microsoft/drumkit-wp.git",
          ssh_url: "git@github.com:microsoft/drumkit-wp.git",
          clone_url: "https://github.com/microsoft/drumkit-wp.git",
          svn_url: "https://github.com/microsoft/drumkit-wp",
          homepage: "",
          size: 4134,
          stargazers_count: 22,
          watchers_count: 22,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 18,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 18,
          open_issues: 0,
          watchers: 22,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13832727,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzgzMjcyNw==",
          name: "bubble-level-wp",
          full_name: "microsoft/bubble-level-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/bubble-level-wp",
          description:
            "Bubble Level is a simple Windows Phone example application demonstrating the use of accelerometer sensors to calculate the inclination of the device and presents this as a traditional bubble level.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/bubble-level-wp",
          forks_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/bubble-level-wp/deployments",
          created_at: "2013-10-24T13:22:49Z",
          updated_at: "2020-05-05T09:31:57Z",
          pushed_at: "2014-11-27T11:59:07Z",
          git_url: "git://github.com/microsoft/bubble-level-wp.git",
          ssh_url: "git@github.com:microsoft/bubble-level-wp.git",
          clone_url: "https://github.com/microsoft/bubble-level-wp.git",
          svn_url: "https://github.com/microsoft/bubble-level-wp",
          homepage: null,
          size: 2134,
          stargazers_count: 9,
          watchers_count: 9,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 14,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 14,
          open_issues: 0,
          watchers: 9,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13832862,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzgzMjg2Mg==",
          name: "phone-info",
          full_name: "microsoft/phone-info",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/phone-info",
          description:
            "An example application for retrieving both static and dynamic properties of a Windows Phone device. The methods demonstrated by this app can be used for adapting your application to wider range of phone models; If a phone does not support a certain non-vital feature of your application, you can gracefully adapt by hiding that feature dynamically.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/phone-info",
          forks_url: "https://api.github.com/repos/microsoft/phone-info/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/phone-info/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/phone-info/collaborators{/collaborator}",
          teams_url: "https://api.github.com/repos/microsoft/phone-info/teams",
          hooks_url: "https://api.github.com/repos/microsoft/phone-info/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/phone-info/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/phone-info/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/phone-info/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/phone-info/branches{/branch}",
          tags_url: "https://api.github.com/repos/microsoft/phone-info/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/phone-info/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/phone-info/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/phone-info/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/phone-info/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/phone-info/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/phone-info/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/phone-info/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/phone-info/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/phone-info/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/phone-info/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/phone-info/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/phone-info/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/phone-info/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/phone-info/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/phone-info/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/phone-info/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/phone-info/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/phone-info/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/phone-info/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/phone-info/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/phone-info/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/phone-info/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/phone-info/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/phone-info/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/phone-info/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/phone-info/deployments",
          created_at: "2013-10-24T13:28:14Z",
          updated_at: "2020-05-09T12:00:46Z",
          pushed_at: "2014-11-28T12:28:58Z",
          git_url: "git://github.com/microsoft/phone-info.git",
          ssh_url: "git@github.com:microsoft/phone-info.git",
          clone_url: "https://github.com/microsoft/phone-info.git",
          svn_url: "https://github.com/microsoft/phone-info",
          homepage:
            "http://developer.nokia.com/resources/library/Lumia/how-to-adapt-to-lumia-phone-hardware-features/hardware-info-test-app.html",
          size: 16330,
          stargazers_count: 35,
          watchers_count: 35,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 27,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 1,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 27,
          open_issues: 1,
          watchers: 35,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13859300,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzg1OTMwMA==",
          name: "launchapp-tag-maker",
          full_name: "microsoft/launchapp-tag-maker",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/launchapp-tag-maker",
          description:
            "LaunchApp Tag Maker allows you to ceate NFC tags which can launch any apps available at ​http://www.windowsphone.com/ or apps that you installed youself. ",
          fork: false,
          url: "https://api.github.com/repos/microsoft/launchapp-tag-maker",
          forks_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/launchapp-tag-maker/deployments",
          created_at: "2013-10-25T11:57:24Z",
          updated_at: "2020-05-09T10:13:01Z",
          pushed_at: "2014-11-12T13:50:26Z",
          git_url: "git://github.com/microsoft/launchapp-tag-maker.git",
          ssh_url: "git@github.com:microsoft/launchapp-tag-maker.git",
          clone_url: "https://github.com/microsoft/launchapp-tag-maker.git",
          svn_url: "https://github.com/microsoft/launchapp-tag-maker",
          homepage: null,
          size: 451,
          stargazers_count: 11,
          watchers_count: 11,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 10,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 10,
          open_issues: 0,
          watchers: 11,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
        {
          id: 13859428,
          node_id: "MDEwOlJlcG9zaXRvcnkxMzg1OTQyOA==",
          name: "matchem-poker-wp",
          full_name: "microsoft/matchem-poker-wp",
          private: false,
          owner: {
            login: "microsoft",
            id: 6154722,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjYxNTQ3MjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/6154722?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/microsoft",
            html_url: "https://github.com/microsoft",
            followers_url: "https://api.github.com/users/microsoft/followers",
            following_url:
              "https://api.github.com/users/microsoft/following{/other_user}",
            gists_url: "https://api.github.com/users/microsoft/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/microsoft/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/microsoft/subscriptions",
            organizations_url: "https://api.github.com/users/microsoft/orgs",
            repos_url: "https://api.github.com/users/microsoft/repos",
            events_url:
              "https://api.github.com/users/microsoft/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/microsoft/received_events",
            type: "Organization",
            site_admin: false,
          },
          html_url: "https://github.com/microsoft/matchem-poker-wp",
          description:
            "Arcade style match-N game with poker hands implementaion for Windows Phone devices.",
          fork: false,
          url: "https://api.github.com/repos/microsoft/matchem-poker-wp",
          forks_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/forks",
          keys_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/keys{/key_id}",
          collaborators_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/collaborators{/collaborator}",
          teams_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/teams",
          hooks_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/hooks",
          issue_events_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/issues/events{/number}",
          events_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/events",
          assignees_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/assignees{/user}",
          branches_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/branches{/branch}",
          tags_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/tags",
          blobs_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/blobs{/sha}",
          git_tags_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/tags{/sha}",
          git_refs_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/refs{/sha}",
          trees_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/trees{/sha}",
          statuses_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/statuses/{sha}",
          languages_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/languages",
          stargazers_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/stargazers",
          contributors_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/contributors",
          subscribers_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/subscribers",
          subscription_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/subscription",
          commits_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/commits{/sha}",
          git_commits_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/git/commits{/sha}",
          comments_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/comments{/number}",
          issue_comment_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/issues/comments{/number}",
          contents_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/contents/{+path}",
          compare_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/compare/{base}...{head}",
          merges_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/merges",
          archive_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/{archive_format}{/ref}",
          downloads_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/downloads",
          issues_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/issues{/number}",
          pulls_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/pulls{/number}",
          milestones_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/milestones{/number}",
          notifications_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/notifications{?since,all,participating}",
          labels_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/labels{/name}",
          releases_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/releases{/id}",
          deployments_url:
            "https://api.github.com/repos/microsoft/matchem-poker-wp/deployments",
          created_at: "2013-10-25T12:03:20Z",
          updated_at: "2020-05-09T10:40:16Z",
          pushed_at: "2014-11-28T13:16:03Z",
          git_url: "git://github.com/microsoft/matchem-poker-wp.git",
          ssh_url: "git@github.com:microsoft/matchem-poker-wp.git",
          clone_url: "https://github.com/microsoft/matchem-poker-wp.git",
          svn_url: "https://github.com/microsoft/matchem-poker-wp",
          homepage: null,
          size: 12836,
          stargazers_count: 9,
          watchers_count: 9,
          language: "C#",
          has_issues: true,
          has_projects: true,
          has_downloads: true,
          has_wiki: true,
          has_pages: false,
          forks_count: 13,
          mirror_url: null,
          archived: false,
          disabled: false,
          open_issues_count: 0,
          license: {
            key: "other",
            name: "Other",
            spdx_id: "NOASSERTION",
            url: null,
            node_id: "MDc6TGljZW5zZTA=",
          },
          forks: 13,
          open_issues: 0,
          watchers: 9,
          default_branch: "master",
          permissions: {
            admin: false,
            push: false,
            pull: true,
          },
        },
      ];
    const contributors =
      // 20210127090533
      // https://api.github.com/repos/microsoft/BeanSpy/contributors

      [
        {
          login: "liupeirong",
          id: 1184120,
          node_id: "MDQ6VXNlcjExODQxMjA=",
          avatar_url: "https://avatars.githubusercontent.com/u/1184120?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/liupeirong",
          html_url: "https://github.com/liupeirong",
          followers_url: "https://api.github.com/users/liupeirong/followers",
          following_url:
            "https://api.github.com/users/liupeirong/following{/other_user}",
          gists_url: "https://api.github.com/users/liupeirong/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/liupeirong/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/liupeirong/subscriptions",
          organizations_url: "https://api.github.com/users/liupeirong/orgs",
          repos_url: "https://api.github.com/users/liupeirong/repos",
          events_url:
            "https://api.github.com/users/liupeirong/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/liupeirong/received_events",
          type: "User",
          site_admin: false,
          contributions: 3,
        },
        {
          login: "wsclock",
          id: 51519,
          node_id: "MDQ6VXNlcjUxNTE5",
          avatar_url: "https://avatars.githubusercontent.com/u/51519?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/wsclock",
          html_url: "https://github.com/wsclock",
          followers_url: "https://api.github.com/users/wsclock/followers",
          following_url:
            "https://api.github.com/users/wsclock/following{/other_user}",
          gists_url: "https://api.github.com/users/wsclock/gists{/gist_id}",
          starred_url:
            "https://api.github.com/users/wsclock/starred{/owner}{/repo}",
          subscriptions_url:
            "https://api.github.com/users/wsclock/subscriptions",
          organizations_url: "https://api.github.com/users/wsclock/orgs",
          repos_url: "https://api.github.com/users/wsclock/repos",
          events_url: "https://api.github.com/users/wsclock/events{/privacy}",
          received_events_url:
            "https://api.github.com/users/wsclock/received_events",
          type: "User",
          site_admin: false,
          contributions: 1,
        },
      ];

    const issues =
      // 20210127090545
      // https://api.github.com/repos/microsoft/BeanSpy/issues

      [
        {
          url: "https://api.github.com/repos/microsoft/BeanSpy/issues/6",
          repository_url: "https://api.github.com/repos/microsoft/BeanSpy",
          labels_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/6/labels{/name}",
          comments_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/6/comments",
          events_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/6/events",
          html_url: "https://github.com/microsoft/BeanSpy/issues/6",
          id: 462598023,
          node_id: "MDU6SXNzdWU0NjI1OTgwMjM=",
          number: 6,
          title: "Xml external entity injection",
          user: {
            login: "QiAnXinCodeSafe",
            id: 39950310,
            node_id: "MDQ6VXNlcjM5OTUwMzEw",
            avatar_url: "https://avatars.githubusercontent.com/u/39950310?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/QiAnXinCodeSafe",
            html_url: "https://github.com/QiAnXinCodeSafe",
            followers_url:
              "https://api.github.com/users/QiAnXinCodeSafe/followers",
            following_url:
              "https://api.github.com/users/QiAnXinCodeSafe/following{/other_user}",
            gists_url:
              "https://api.github.com/users/QiAnXinCodeSafe/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/QiAnXinCodeSafe/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/QiAnXinCodeSafe/subscriptions",
            organizations_url:
              "https://api.github.com/users/QiAnXinCodeSafe/orgs",
            repos_url: "https://api.github.com/users/QiAnXinCodeSafe/repos",
            events_url:
              "https://api.github.com/users/QiAnXinCodeSafe/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/QiAnXinCodeSafe/received_events",
            type: "User",
            site_admin: false,
          },
          labels: [],
          state: "open",
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 0,
          created_at: "2019-07-01T09:04:23Z",
          updated_at: "2019-07-01T09:07:30Z",
          closed_at: null,
          author_association: "NONE",
          active_lock_reason: null,
          body:
            "The Domparser method in the InvokeDecoder.java uses the xml parser to parse the xml string without disabling the xml external entity, causing the attacker to construct a malicious xml string for the xce attack .\r\n![图片](https://user-images.githubusercontent.com/39950310/60424151-43185500-9c22-11e9-8961-278b2c69e0bd.png)\r\n\r\nThe same problem exists in SAXParser.java and XMLConfig.java",
          performed_via_github_app: null,
        },
        {
          url: "https://api.github.com/repos/microsoft/BeanSpy/issues/5",
          repository_url: "https://api.github.com/repos/microsoft/BeanSpy",
          labels_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/5/labels{/name}",
          comments_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/5/comments",
          events_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/5/events",
          html_url: "https://github.com/microsoft/BeanSpy/pull/5",
          id: 370282865,
          node_id: "MDExOlB1bGxSZXF1ZXN0MjIyOTk2MDkx",
          number: 5,
          title: "Fix typo for the word readable",
          user: {
            login: "iamalsaher",
            id: 26490648,
            node_id: "MDQ6VXNlcjI2NDkwNjQ4",
            avatar_url: "https://avatars.githubusercontent.com/u/26490648?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/iamalsaher",
            html_url: "https://github.com/iamalsaher",
            followers_url: "https://api.github.com/users/iamalsaher/followers",
            following_url:
              "https://api.github.com/users/iamalsaher/following{/other_user}",
            gists_url:
              "https://api.github.com/users/iamalsaher/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/iamalsaher/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/iamalsaher/subscriptions",
            organizations_url: "https://api.github.com/users/iamalsaher/orgs",
            repos_url: "https://api.github.com/users/iamalsaher/repos",
            events_url:
              "https://api.github.com/users/iamalsaher/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/iamalsaher/received_events",
            type: "User",
            site_admin: false,
          },
          labels: [],
          state: "open",
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 0,
          created_at: "2018-10-15T18:13:17Z",
          updated_at: "2020-01-14T20:16:49Z",
          closed_at: null,
          author_association: "NONE",
          active_lock_reason: null,
          pull_request: {
            url: "https://api.github.com/repos/microsoft/BeanSpy/pulls/5",
            html_url: "https://github.com/microsoft/BeanSpy/pull/5",
            diff_url: "https://github.com/microsoft/BeanSpy/pull/5.diff",
            patch_url: "https://github.com/microsoft/BeanSpy/pull/5.patch",
          },
          body: "",
          performed_via_github_app: null,
        },
        {
          url: "https://api.github.com/repos/microsoft/BeanSpy/issues/4",
          repository_url: "https://api.github.com/repos/microsoft/BeanSpy",
          labels_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/4/labels{/name}",
          comments_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/4/comments",
          events_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/4/events",
          html_url: "https://github.com/microsoft/BeanSpy/pull/4",
          id: 365344328,
          node_id: "MDExOlB1bGxSZXF1ZXN0MjE5Mjg1OTE3",
          number: 4,
          title: "Improve readme formatting (markdown)",
          user: {
            login: "berry120",
            id: 7595149,
            node_id: "MDQ6VXNlcjc1OTUxNDk=",
            avatar_url: "https://avatars.githubusercontent.com/u/7595149?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/berry120",
            html_url: "https://github.com/berry120",
            followers_url: "https://api.github.com/users/berry120/followers",
            following_url:
              "https://api.github.com/users/berry120/following{/other_user}",
            gists_url: "https://api.github.com/users/berry120/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/berry120/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/berry120/subscriptions",
            organizations_url: "https://api.github.com/users/berry120/orgs",
            repos_url: "https://api.github.com/users/berry120/repos",
            events_url:
              "https://api.github.com/users/berry120/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/berry120/received_events",
            type: "User",
            site_admin: false,
          },
          labels: [],
          state: "open",
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 1,
          created_at: "2018-10-01T07:47:55Z",
          updated_at: "2018-10-01T18:55:28Z",
          closed_at: null,
          author_association: "NONE",
          active_lock_reason: null,
          pull_request: {
            url: "https://api.github.com/repos/microsoft/BeanSpy/pulls/4",
            html_url: "https://github.com/microsoft/BeanSpy/pull/4",
            diff_url: "https://github.com/microsoft/BeanSpy/pull/4.diff",
            patch_url: "https://github.com/microsoft/BeanSpy/pull/4.patch",
          },
          body: "Move README file to markdown format",
          performed_via_github_app: null,
        },
        {
          url: "https://api.github.com/repos/microsoft/BeanSpy/issues/3",
          repository_url: "https://api.github.com/repos/microsoft/BeanSpy",
          labels_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/3/labels{/name}",
          comments_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/3/comments",
          events_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/3/events",
          html_url: "https://github.com/microsoft/BeanSpy/pull/3",
          id: 177572933,
          node_id: "MDExOlB1bGxSZXF1ZXN0ODU2NzMwODU=",
          number: 3,
          title: "Support for Karaf OSGi (for A-MQ)",
          user: {
            login: "dealboy",
            id: 1675899,
            node_id: "MDQ6VXNlcjE2NzU4OTk=",
            avatar_url: "https://avatars.githubusercontent.com/u/1675899?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/dealboy",
            html_url: "https://github.com/dealboy",
            followers_url: "https://api.github.com/users/dealboy/followers",
            following_url:
              "https://api.github.com/users/dealboy/following{/other_user}",
            gists_url: "https://api.github.com/users/dealboy/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/dealboy/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/dealboy/subscriptions",
            organizations_url: "https://api.github.com/users/dealboy/orgs",
            repos_url: "https://api.github.com/users/dealboy/repos",
            events_url: "https://api.github.com/users/dealboy/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/dealboy/received_events",
            type: "User",
            site_admin: false,
          },
          labels: [],
          state: "open",
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 0,
          created_at: "2016-09-17T12:24:22Z",
          updated_at: "2017-03-30T14:03:47Z",
          closed_at: null,
          author_association: "NONE",
          active_lock_reason: null,
          pull_request: {
            url: "https://api.github.com/repos/microsoft/BeanSpy/pulls/3",
            html_url: "https://github.com/microsoft/BeanSpy/pull/3",
            diff_url: "https://github.com/microsoft/BeanSpy/pull/3.diff",
            patch_url: "https://github.com/microsoft/BeanSpy/pull/3.patch",
          },
          body:
            "Added new classes to support KarafJMXAbstraction and modified existig ones to find the new MBEAN store\n",
          performed_via_github_app: null,
        },
        {
          url: "https://api.github.com/repos/microsoft/BeanSpy/issues/2",
          repository_url: "https://api.github.com/repos/microsoft/BeanSpy",
          labels_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/2/labels{/name}",
          comments_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/2/comments",
          events_url:
            "https://api.github.com/repos/microsoft/BeanSpy/issues/2/events",
          html_url: "https://github.com/microsoft/BeanSpy/issues/2",
          id: 33162630,
          node_id: "MDU6SXNzdWUzMzE2MjYzMA==",
          number: 2,
          title: "Connectivity/Monitoring of CQ from SCOM using beanspy/Mbeans",
          user: {
            login: "itsmevarun",
            id: 7370311,
            node_id: "MDQ6VXNlcjczNzAzMTE=",
            avatar_url: "https://avatars.githubusercontent.com/u/7370311?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/itsmevarun",
            html_url: "https://github.com/itsmevarun",
            followers_url: "https://api.github.com/users/itsmevarun/followers",
            following_url:
              "https://api.github.com/users/itsmevarun/following{/other_user}",
            gists_url:
              "https://api.github.com/users/itsmevarun/gists{/gist_id}",
            starred_url:
              "https://api.github.com/users/itsmevarun/starred{/owner}{/repo}",
            subscriptions_url:
              "https://api.github.com/users/itsmevarun/subscriptions",
            organizations_url: "https://api.github.com/users/itsmevarun/orgs",
            repos_url: "https://api.github.com/users/itsmevarun/repos",
            events_url:
              "https://api.github.com/users/itsmevarun/events{/privacy}",
            received_events_url:
              "https://api.github.com/users/itsmevarun/received_events",
            type: "User",
            site_admin: false,
          },
          labels: [],
          state: "open",
          locked: false,
          assignee: null,
          assignees: [],
          milestone: null,
          comments: 1,
          created_at: "2014-05-09T10:52:29Z",
          updated_at: "2014-05-09T22:44:35Z",
          closed_at: null,
          author_association: "NONE",
          active_lock_reason: null,
          body:
            "Hi ,\nDoes anyone know how can SCOM (System Center Operations Manager) connect to CQ's Mbean using Beanspy. What is the format of xml that is used .\nThe same thing is used monitor to the Tomcat server also (using its mbean).\n.I have attached the screenshot of the xml jpeg \n![applicationdiscoveryxml](https://cloud.githubusercontent.com/assets/7370311/2927430/4f832e9e-d76c-11e3-83d8-bfd8ef5d979c.jpg)\n\n.So Similarly what is the format of XML that is used with CQ or How can the CQ application be monitored using SCOM /Beanspy..\nAny help is greatly appreciated.\n",
          performed_via_github_app: null,
        },
      ];
    return { profile, repos, contributors, issues };
  }

  function showProfile(user) {
    profile.innerHTML = `
      <div class="row mt-3">
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img
              src="${user.avatar_url}"
              alt="Profile Image"
              class="card-img-top"
            />
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Repositórios
                <span class="badge badge-success">${user.public_repos}</span>
              </li>
              <li class="list-group-item">
                Seguidores
                <span class="badge badge-primary">${user.followers}</span>
              </li>
              <li class="list-group-item">
                Seguindo
                <span class="badge badge-info">${user.following}</span>
              </li>
            </ul>
            <div class="card-bory">
              <a href="${user.html_url}" target="blank" class="btn btn-warning btn-block">
                Ver Perfil
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div id="repos"></div>
        </div>
      </div>`;
  }
  function showRepos(repos, contributors, issues) {
    let output = "";

    repos.forEach((repo, contributor, issue) => {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
          <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
          </div>
          <div class="col-md-6">
          <a href="${repo.contributors_url}">
          <span class="badge badge-primary">Contributors: ${contributor.contributors}</span>
          </a>  
          <a href="${repo.issues_url}">
          <span class="badge badge-success">Issues: ${issue.open_issues_count}</span>
          </a>
          </div>
          </div>
      </div>`;
    });
    document.getElementById("repos").innerHTML = output;
  }
  search.addEventListener("keyup", (e) => {
    const user = e.target.value;
    const infos = e.target.value;
    if (user.length > 0) {
      getUser(user).then((res) => {
        showProfile(res.profile);
        showRepos(res.repos);
        getInfo(res, contributors);
        getInfo(res, issues);
      });
    }
  });
})();
